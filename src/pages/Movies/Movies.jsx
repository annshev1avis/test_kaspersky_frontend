import { useEffect, useState } from "react";
import { getMovies } from "../../services/api";
import MoviesTable from "../../components/MoviesTable/MoviesTable";
import SearchInput from "../../components/SearchInput/SearchInput";
import SortSelect from "../../components/SortSelect/SortSelect";
import "./Movies.css";


export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    loadMovies();
  }, [])

  const sortingOptions = [
    { value: "title", label: "По названию" },
    { value: "year", label: "По году" },
    { value: "rating", label: "По рейтингу" },
  ];

  return (
    <div className="container movies__container">
      <div className="movies__title-and-buttons">
        <h2 className="title-h2">Список фильмов</h2>
        <div className="movies__buttons">
          <button className="button button--primary">
            <img></img>
            Добавить
          </button>
          <button className="button button--danger">
            <img></img>
            Удалить
          </button>
        </div>
      </div>
      <div className="movies__search-and-sorting">
        <SearchInput className="movies__search" />
        <SortSelect options={sortingOptions}/>
      </div>
      <MoviesTable movies={movies} />
    </div>
  )
}