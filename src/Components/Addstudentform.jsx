import { useState } from "react";

function AddStudentForm({ onAdd }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const parsedScore = parseInt(score);
    if (!name.trim() || isNaN(parsedScore) || parsedScore < 0 || parsedScore > 100) return;
    onAdd(name.trim(), parsedScore);
    setName("");
    setScore("");
  }

  return (
    <div className="form-panel">
      <div className="panel-header">
        <span className="panel-label">REGISTER STUDENT</span>
        <span className="panel-tag">NEW ENTRY</span>
      </div>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Student name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-input"
          type="number"
          placeholder="Score (0-100)"
          min="0"
          max="100"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button className="add-btn" type="submit">+ ADD</button>
      </form>
    </div>
  );
}

export default AddStudentForm;