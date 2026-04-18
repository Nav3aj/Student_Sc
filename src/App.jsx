import { useState } from "react";
import Header from "./Components/Header";
import AddStudentForm from "./Components/Addstudentform";
import StudentTable from "./Components/Studenttable";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Navraj", score: 90 },
    { id: 2, name: "Tanish", score: 55 },
    { id: 3, name: "Kunal", score: 60 },
    { id: 4, name: "Nikhil", score: 32 },
  ]);
  const [nextId, setNextId] = useState(5);

  function addStudent(name, score) {
    setStudents([...students, { id: nextId, name, score }]);
    setNextId(nextId + 1);
  }

  function updateScore(id, newScore) {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, score: newScore } : s))
    );
  }

  const total = students.length;
  const passed = students.filter((s) => s.score >= 40).length;
  const avg = total
    ? Math.round(students.reduce((a, s) => a + s.score, 0) / total)
    : 0;

  return (
    <div className="app">
      <Header title="Student Scoreboard" />

      <AddStudentForm onAdd={addStudent} />

      <div className="stats-bar">
        <div className="stat-card">
          <span className="stat-label">TOTAL</span>
          <span className="stat-value">{total}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">PASSED</span>
          <span className="stat-value passed">{passed}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">AVG SCORE</span>
          <span className="stat-value">{avg}</span>
        </div>
      </div>

      <StudentTable students={students} onUpdateScore={updateScore} />
    </div>
  );
}

export default App;