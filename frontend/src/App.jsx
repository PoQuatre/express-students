import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((res) => res.json())
      .then((res) => setStudents(res));
  }, []);

  return (
    <div>
      <h1>Students</h1>
      <ul>
        {students.map((student) => (
          <li>{student}</li>
        ))}
      </ul>
      <form action="http://localhost:8080/students" method="post">
        <input type="text" name="name" />
        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
}

export default App;
