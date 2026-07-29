const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// in-memory data (Temporary database)

// GET all students

// GET one student

// POST - Add a new student

// Validation

// PATCH - Update a student

// DELETE - Remove a student


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});