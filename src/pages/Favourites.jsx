import { Link } from "react-router-dom";
import { useStudents } from "../context/StudentContext.jsx";

export default function Favourites() {
  const { favourites, removeFavourite } = useStudents();

  return (
    <section>
      <h1>Favourite students</h1>

      {favourites.length === 0 ? (
        <div className="empty">
          <p>No favourite students added yet</p>
          <Link to="/" className="btn btn-add">
            Browse students
          </Link>
        </div>
      ) : (
        <ul className="list">
          {favourites.map((student) => (
            <li key={student.id} className="row">
              <div>
                <p className="name">{student.name}</p>
                <p className="roll">{student.roll}</p>
              </div>
              <button
                className="btn btn-remove"
                onClick={() => removeFavourite(student.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
