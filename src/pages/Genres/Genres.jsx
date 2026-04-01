import { useEffect, useState } from "react";
import GenreCard from "../../components/GenreCard/GenreCard";
import { getGenres } from "../../services/api";
import "./Genres.css";

export default function Genres() {
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadGenres() {
      try {
        const data = await getGenres();
        setGenres(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    loadGenres();
  }, []);

  if (isLoading) {
    return <div className="container groups">Загрузка...</div>;
  }

  if (error) {
    return <div className="container groups">Ошибка: {error}</div>;
  }

  return (
    <section className="container groups">
      <div className="groups__header">
        <h2 className="title-h2">Жанры фильмов</h2>
        <p className="groups__subtitle">
          Всего жанров: {genres.length}
        </p>
      </div>

      <div className="groups__grid">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}