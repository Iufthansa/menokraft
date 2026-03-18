import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import db from "./config/db.js";
import jobSpecsRoutes from "./routes/jobSpecs.js";
import jobsRoutes from "./routes/jobs.js";
import applicationsRoutes from "./routes/applications.js";
import authRoutes from "./routes/auth.js";
import dashboardRoutes from "./routes/dashboard.js";
import path from "path";


const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use("/job-specs", jobSpecsRoutes);
app.use("/jobs", jobsRoutes);
app.use("/applications", applicationsRoutes);
app.use("/uploads", express.static("uploads"));
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);


// test DB connection
app.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT 1");
    res.json({ message: "Database connected!", result: rows });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// const createAdmin = async () => {
//   const hashedPassword = await bcrypt.hash("admin123", 10);

//   await db.query(
//     "INSERT INTO admin (email, password) VALUES (?, ?)",
//     ["testadmin@g.com", hashedPassword]
//   );

//   console.log("Admin created");
// };

// createAdmin();

// base route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});