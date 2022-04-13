const express = require("express");

const app = express();
const port = 8080;

const students = ["Student 1", "Student 2"];

app.use(express.urlencoded({ extended: true }));

app.get("/students", (req, res) => {
  res.json(students);
});

app.post("/students", (req, res) => {
  const name = req.body.name;

  if (name && typeof name === "string" && name.trim().length > 0) {
    students.push(name.trim());

    res.redirect("http://localhost:3000/");
  } else {
    res.status(400).send("Invalid name");
  }
});

app.listen(port, () => {
  console.log("The server started listening on port", port);
});
