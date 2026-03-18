import express from "express";
import db from "../config/db.js";

const router = express.Router();

// GET all job specs
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM job_specs");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;