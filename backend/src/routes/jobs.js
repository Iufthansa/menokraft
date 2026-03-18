import express from "express";
import db from "../config/db.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

// CREATE JOB
router.post("/", authMiddleware, async (req, res) => {
    if (!req.body || !req.body.job_title) {
        return res.status(400).json({ error: "Missing required fields" });
    }

  const {
    job_title,
    job_description,
    job_location,
    job_salary,
    job_requirements,
    job_specs
  } = req.body;

  const connection = await db.getConnection();

  try {
    await connection.beginTransaction();

    const [result] = await connection.query(
      `INSERT INTO jobs 
      (job_title, job_description, job_location, job_salary, job_requirements)
      VALUES (?, ?, ?, ?, ?)`,
      [job_title, job_description, job_location, job_salary, job_requirements]
    );

    const jobId = result.insertId;

    if (job_specs && job_specs.length > 0) {
      const values = job_specs.map(specId => [jobId, specId]);

      await connection.query(
        "INSERT INTO job_spec_map (job_id, spec_id) VALUES ?",
        [values]
      );
    }

    await connection.commit();

    res.status(201).json({
      message: "Job created successfully",
      jobId
    });

  } catch (err) {
    await connection.rollback();
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
});


// GET ALL JOBS (with full spec objects)
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        jobs.*,
        GROUP_CONCAT(job_specs.id) AS spec_ids,
        GROUP_CONCAT(job_specs.name) AS spec_names
      FROM jobs
      LEFT JOIN job_spec_map ON jobs.id = job_spec_map.job_id
      LEFT JOIN job_specs ON job_spec_map.spec_id = job_specs.id
      GROUP BY jobs.id
      ORDER BY jobs.created_at DESC
    `);

    const formatted = rows.map(job => {
    if (!job.spec_ids || !job.spec_names) {
        const { spec_ids, spec_names, ...rest } = job;

        return {
        ...rest,
        specs: []
        };
    }

    const ids = job.spec_ids.split(",");
    const names = job.spec_names.split(",");

    const specs = ids.map((id, index) => ({
        id: Number(id),
        name: names[index]
    }));

    // 👇 REMOVE raw fields
    const { spec_ids, spec_names, ...rest } = job;

    return {
        ...rest,
        specs
    };
    });

    res.json(formatted);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// GET SINGLE JOB
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await db.query(`
      SELECT 
        jobs.*,
        GROUP_CONCAT(job_specs.id) AS spec_ids,
        GROUP_CONCAT(job_specs.name) AS spec_names
      FROM jobs
      LEFT JOIN job_spec_map ON jobs.id = job_spec_map.job_id
      LEFT JOIN job_specs ON job_spec_map.spec_id = job_specs.id
      WHERE jobs.id = ?
      GROUP BY jobs.id
    `, [id]);

    // If job not found
    if (rows.length === 0) {
      return res.status(404).json({ error: "Job not found" });
    }

    const job = rows[0];

    // Handle no specs
    let specs = [];

    if (job.spec_ids && job.spec_names) {
      const ids = job.spec_ids.split(",");
      const names = job.spec_names.split(",");

      specs = ids.map((id, index) => ({
        id: Number(id),
        name: names[index]
      }));
    }

    // Remove raw fields
    const { spec_ids, spec_names, ...rest } = job;

    res.json({
      ...rest,
      specs
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});





export default router;