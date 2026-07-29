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
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const initialLength = students.length;

    students = students.filter((s) => s.id !== id);

    if (students.length === initialLength) {
        return res.status(404).json({ 
            error: "Student not found"
        });
    }
    res.status(200).json({ 
        message: "Student deleted successfully" 
    });
});

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});