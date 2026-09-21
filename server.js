require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static("public"));

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        console.log("Database connection failed:", err.message);
    } else {
        console.log("Connected to MySQL database.");
    }
});

// Get all students
app.get("/api/students", (req, res) => {

    const sql = "SELECT * FROM students ORDER BY student_id DESC";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
});

// Add student
app.post("/api/students", (req, res) => {

    const {
        name,
        email,
        branch,
        cgpa,
        graduation_year
    } = req.body;

    const sql = `
        INSERT INTO students
        (name, email, branch, cgpa, graduation_year)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [name, email, branch, cgpa, graduation_year],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "Student added successfully",
                student_id: result.insertId
            });
        }
    );
});

// Get all companies
app.get("/api/companies", (req, res) => {

    const sql = "SELECT * FROM companies ORDER BY company_id";

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
});

// Get applications with JOIN
app.get("/api/applications", (req, res) => {

    const sql = `
        SELECT
            applications.application_id,
            students.name AS student_name,
            companies.company_name,
            companies.job_role,
            applications.application_date,
            applications.status
        FROM applications
        JOIN students
            ON applications.student_id = students.student_id
        JOIN companies
            ON applications.company_id = companies.company_id
        ORDER BY applications.application_id DESC
    `;

    db.query(sql, (err, results) => {

        if (err) {
            return res.status(500).json({
                error: err.message
            });
        }

        res.json(results);
    });
});

// Apply for company
app.post("/api/applications", (req, res) => {

    const {
        student_id,
        company_id
    } = req.body;

    const sql = `
        INSERT INTO applications
        (student_id, company_id, application_date)
        VALUES (?, ?, CURDATE())
    `;

    db.query(
        sql,
        [student_id, company_id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    error: err.message
                });
            }

            res.json({
                message: "Application submitted successfully",
                application_id: result.insertId
            });
        }
    );
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});