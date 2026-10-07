import { NavLink } from "react-router-dom";
import { useStudents } from "../context/StudentContext.jsx";

export default function Navbar() {
  const { favourites } = useStudents();

  return (
    <header className="navbar">
      <span className="brand">Class Roster</span>
      <nav>
        <NavLink to="/" end className="nav-link">
          Students
        </NavLink>
        <NavLink to="/favourites" className="nav-link">
          Favourites
          <span className="badge">{favourites.length}</span>
        </NavLink>
      </nav>
    </header>
  );
}
