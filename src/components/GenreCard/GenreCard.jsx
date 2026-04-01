import "./GenreCard.css";

export default function GenreCard({ genre }) {
  const moviesLabel = genre.moviesCount === 1 ? "фильм" : "фильмов";

  return (
    <article className="genre-card">
      <div className="genre-card__content">
        <h3 className="genre-card__title">{genre.name}</h3>
        <p className="genre-card__count">
          {genre.moviesCount} {moviesLabel}
        </p>
      </div>
    </article>
  );
}