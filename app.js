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
      error: "Student not found",
    });
  }
  res.status(200).json(student);
});

// POST - Add a new student
app.post("/students", (req, res) => {
  const { name, course, age, year } = req.body;

  // Validation
  if (
    !name?.trim() ||
    !course?.trim() ||
    age === undefined ||
    year === undefined
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (Number.isNaN(Number(age))) {
    return res.status(400).json({ error: "Age must be a number" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    course,
    age: Number(age),
    year,
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PATCH - Update a student

// DELETE - Remove a student

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
