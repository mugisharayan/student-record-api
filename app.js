const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// in-memory data (Temporary database)

// GET all students
app.get("/students", (req, res) => {
    res.status(200).json(students);
});

// GET one student
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    const student = students.find((s) => s.id === id);

    if (!student) {
        return res.status(404).json({ 
            error: "Student not found"
        });
    }
    res.status(200).json(student);
});

// POST - Add a new student

// Validation

// PATCH - Update a student

// DELETE - Remove a student


const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});