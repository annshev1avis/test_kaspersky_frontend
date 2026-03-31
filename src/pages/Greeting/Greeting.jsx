import heroImg from "@/assets/images/hero.webp";
import "./Greeting.css";
import { Link } from "react-router-dom";

export default function Greeting() {
  return (
    <main className="welcome container">
      <div className="welcome__content ">
        <div className="welcome__text">
          <h1 className="welcome__title">Добро пожаловать</h1>
          <p className="welcome__subtitle">
            в ваш персональный каталог фильмов!
          </p>
        </div>

        <Link className="welcome__button" to="/list">
          Начать просмотр
          <span className="welcome__button-arrow">→</span>
        </Link>
      </div>

      <img
        className="welcome__image"
        src={heroImg}
        alt="Иллюстрация с просмотром фильмов"
      />
    </main>
  );
}