
const express = require("express");
const { Pool } = require("pg");

const app = express();
const PORT = 3000;

app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST || "db",
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
});

// Health endpoint
app.get("/api/health", (req, res) => {
    res.json({ status: "Backend is running" });
});

// Get all employees
app.get("/api/employees", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM employees ORDER BY id"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Database query failed" });
    }
});

// Add employee
app.post("/api/employees", async (req, res) => {
    try {
        const { name, position } = req.body;

        if (!name || !position) {
            return res.status(400).json({
                error: "Name and position are required"
            });
        }

        const result = await pool.query(
            "INSERT INTO employees (name, position) VALUES ($1, $2) RETURNING *",
            [name, position]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Could not add employee" });
    }
});

// Initialize database and start server
async function startServer() {
    try {
        // Create employees table if it doesn't exist
        await pool.query(`
            CREATE TABLE IF NOT EXISTS employees (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                position VARCHAR(100) NOT NULL
            )
        `);

        console.log("Employees table initialized");

        // Start Express server only after database initialization
        app.listen(PORT, "0.0.0.0", () => {
            console.log(`Backend running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Database initialization failed:", error);
        process.exit(1);
    }
}

startServer();
