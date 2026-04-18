import StudentRow from "./StudentRow";

function StudentTable({ students, onUpdateScore }) {
  return (
    <div className="table-panel">
      <div className="panel-header">
        <span className="panel-label">STUDENT RECORDS</span>
        <span className="panel-tag">{students.length} entries</span>
      </div>
      <table className="student-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SCORE</th>
            <th>STATUS</th>
            <th>UPDATE</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onUpdateScore={onUpdateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;