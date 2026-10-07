import { useStudents, students } from "../context/StudentContext.jsx";

export default function StudentList() {
  const { addFavourite, isFavourite } = useStudents();

  return (
    <section>
      <h1>All students</h1>
      <ul className="list">
        {students.map((student) => {
          const added = isFavourite(student.id);
          return (
            <li key={student.id} className="row">
              <div>
                <p className="name">{student.name}</p>
                <p className="roll">{student.roll}</p>
              </div>
              <button
                className="btn btn-add"
                onClick={() => addFavourite(student)}
                disabled={added}
              >
                {added ? "Added" : "Add to Favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
