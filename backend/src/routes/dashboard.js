import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/summary", async (req, res) => {
  try {
    const [[jobsCount]] = await db.query(
      "SELECT COUNT(*) as total_jobs FROM jobs"
    );

    const [[appsCount]] = await db.query(
      "SELECT COUNT(*) as total_applications FROM applications"
    );

    const [recentApps] = await db.query(`
      SELECT 
        applications.id,
        applications.fullname,
        jobs.job_title,
        applications.created_at
      FROM applications
      LEFT JOIN jobs ON applications.job_id = jobs.id
      ORDER BY applications.created_at DESC
      LIMIT 5
    `);

    res.json({
      total_jobs: jobsCount.total_jobs,
      total_applications: appsCount.total_applications,
      recent_applications: recentApps
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;