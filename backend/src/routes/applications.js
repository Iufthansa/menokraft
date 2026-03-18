import dotenv from "dotenv";
dotenv.config();
import express from "express";
import db from "../config/db.js";
import upload from "../config/multer.js";
import authMiddleware from "../middleware/auth.js";



const router = express.Router();


// APPLY FOR A JOB
router.post("/", upload.single("resume"), async (req, res) => {
  try {
    const { job_id, fullname, email, phone, cover_letter } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!job_id || !fullname || !email || !phone || !req.file) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const resumeFilename = req.file.filename;

    const [result] = await db.query(
      `INSERT INTO applications 
      (job_id, fullname, email, phone, resume_path, cover_letter)
      VALUES (?, ?, ?, ?, ?, ?)`,
      [job_id, fullname, email, phone, resumeFilename, cover_letter]
    );

    res.status(201).json({
      message: "Application submitted successfully",
      applicationId: result.insertId,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



// GET APPLICATIONS (FILTER + SEARCH + PAGINATION)
router.get("/", authMiddleware, async (req, res) => {
  try {
    const { job_id, search, page = 1, limit = 5 } = req.query;

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const offset = (pageNum - 1) * limitNum;

    let query = `
      SELECT 
        applications.*,
        jobs.job_title,
        jobs.job_location
      FROM applications
      LEFT JOIN jobs ON applications.job_id = jobs.id
    `;

    let countQuery = `
      SELECT COUNT(*) as total
      FROM applications
      LEFT JOIN jobs ON applications.job_id = jobs.id
    `;

    let conditions = [];
    let values = [];

    // 🔹 filter by job
    if (job_id) {
      conditions.push("applications.job_id = ?");
      values.push(job_id);
    }

    // 🔹 search by name or email
    if (search) {
      conditions.push("(applications.fullname LIKE ? OR applications.email LIKE ?)");
      values.push(`%${search}%`, `%${search}%`);
    }

    // 🔹 filter by specs (multi-select)
    if (req.query.spec_ids) {
      const specIds = req.query.spec_ids.split(",");

      conditions.push(`
        jobs.id IN (
          SELECT job_id 
          FROM job_spec_map 
          WHERE spec_id IN (${specIds.map(() => "?").join(",")})
          GROUP BY job_id
          HAVING COUNT(DISTINCT spec_id) = ?
        )
      `);

      values.push(...specIds, specIds.length);
    }

    // 🔹 apply conditions
    if (conditions.length > 0) {
      const whereClause = " WHERE " + conditions.join(" AND ");
      query += whereClause;
      countQuery += whereClause;
    }

    // 🔹 add pagination
    query += " ORDER BY applications.created_at DESC LIMIT ? OFFSET ?";
    const queryValues = [...values, limitNum, offset];

    // 🔹 run queries
    const [rows] = await db.query(query, queryValues);
    const [countResult] = await db.query(countQuery, values);

    const total = countResult[0].total;

    // 🔹 format response
    const formatted = rows.map(app => {
      // ✅ remove any "uploads/" or "uploads\"
      const cleanPath = app.resume_path
        .replace("uploads/", "")
        .replace("uploads\\", "");

      return {
        id: app.id,
        job_id: app.job_id,
        job_title: app.job_title,
        job_location: app.job_location,
        fullname: app.fullname,
        email: app.email,
        phone: app.phone,
        cover_letter: app.cover_letter,
        created_at: app.created_at,
        resume_url: `${process.env.BASE_URL}/uploads/${cleanPath}`
      };
    });

    res.json({
      data: formatted,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        totalPages: Math.ceil(total / limitNum)
      }
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// GET SINGLE APPLICATION
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(`
      SELECT 
        applications.*,
        jobs.job_title,
        jobs.job_location
      FROM applications
      LEFT JOIN jobs ON applications.job_id = jobs.id
      WHERE applications.id = ?
    `, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Application not found" });
    }

    const app = rows[0];

    const cleanPath = app.resume_path
      .replace("uploads/", "")
      .replace("uploads\\", "");

    res.json({
      id: app.id,
      job_id: app.job_id,
      job_title: app.job_title,
      job_location: app.job_location,
      fullname: app.fullname,
      email: app.email,
      phone: app.phone,
      cover_letter: app.cover_letter,
      created_at: app.created_at,
      resume_url: `${process.env.BASE_URL}/uploads/${cleanPath}`
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




export default router;