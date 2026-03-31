import MovieRow from "../MovieRow/MovieRow";
import './MoviesTable.css';

export default function MoviesTable({ movies }) {
  return (
    <div className="movie-table-container">
      <table className="movie-table">
        <thead>
          <tr>
            <th></th>
            <th>Изображение</th>
            <th>Название</th>
            <th>Жанр</th>
            <th>Год выхода</th>
            <th>Рейтинг</th>
            <th>Главные актёры</th>
          </tr>
        </thead>
        <tbody>
          { movies.map((movie) => <MovieRow key={movie.id} movie={movie}/>) }
        </tbody>
      </table>
    </div>
  );
}