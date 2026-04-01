import { NavLink } from "react-router-dom";
import './NavBar.css';


export default function NavBar() {
  return (
    <header className="navbar">
      <div className="container">
        <ul className="navbar__links">
          <li><NavLink className="navbar__link" to="/">Приветствие</NavLink></li>
          <li><NavLink className="navbar__link" to="/list">Список фильмов</NavLink></li>
          <li><NavLink className="navbar__link" to="/genres">Список жанров</NavLink></li>
        </ul>
      </div>
    </header>
  );
}