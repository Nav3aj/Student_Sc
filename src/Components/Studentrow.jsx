import { useState } from "react";

function StudentRow({ student, onUpdateScore }) {
  const [editScore, setEditScore] = useState(student.score);
  const isPass = student.score >= 40;

  function handleSave() {
    const val = parseInt(editScore);
    if (isNaN(val) || val < 0 || val > 100) return;
    onUpdateScore(student.id, val);
  }

  return (
    <tr className={`student-row ${isPass ? "row-pass" : "row-fail"}`}>
      <td className="student-name">{student.name}</td>
      <td>
        <span className={isPass ? "score-pass" : "score-fail"}>
          {student.score}
        </span>
      </td>
      <td>
        <span className={`status-badge ${isPass ? "badge-pass" : "badge-fail"}`}>
          {isPass ? "PASS" : "FAIL"}
        </span>
      </td>
      <td className="update-cell">
        <input
          className="score-input"
          type="number"
          min="0"
          max="100"
          value={editScore}
          onChange={(e) => setEditScore(e.target.value)}
        />
        <button className="save-btn" onClick={handleSave}>
          SAVE
        </button>
      </td>
    </tr>
  );
}

export default StudentRow;