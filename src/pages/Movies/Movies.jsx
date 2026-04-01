import { useEffect, useMemo, useState } from "react";
import { getMovies, createMovie, deleteMovie } from "../../services/api";
import { filterMovies, getVisibleMovies, sortMovies } from "../../utils/moviesListHelpers";
import MoviesTable from "../../components/MoviesTable/MoviesTable";
import SearchInput from "../../components/SearchInput/SearchInput";
import SelectInput from "../../components/SelectInput/SelectInput";
import AddMovieModal from "../../components/AddMovieModal/AddMovieModal";
import "./Movies.css";


const sortByOptions = [
  { value: "title", label: "По названию" },
  { value: "year", label: "По году" },
  { value: "rating", label: "По рейтингу" },
];


const sortingOrderOptions = [
  { value: "asc", label: "По возрастанию" },
  { value: "desc", label: "По убыванию" },
];


export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [sortBy, setSortBy] = useState("rating");
  const [sortingOrder, setSortingOrder] = useState("desc");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedMovieIds, setSelectedMovieIds] = useState([]);
  
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

  async function handleAddMovie(newMovie) {
    try {
      const createdMovie = await createMovie(newMovie);
      setMovies((prev) => [...prev, createdMovie]);
      setIsAddModalOpen(false);
    } catch (err) {
      setError(err.message);
    }
  }

  function handleToggleMovieSelection(movieId) {
    setSelectedMovieIds((prev) => {
      const isSelected = prev.includes(movieId);

      if (isSelected) {
        return prev.filter((id) => id !== movieId);
      }

      return [...prev, movieId];
    });
  }

  async function handleDeleteSelectedMovies() {
    if (selectedMovieIds.length === 0) {
      return;
    }

    try {
      await Promise.all(selectedMovieIds.map((id) => deleteMovie(id)));

      setMovies((prev) =>
        prev.filter((movie) => !selectedMovieIds.includes(movie.id))
      );

      setSelectedMovieIds([]);
    } catch (error) {
      setError("Не удалось удалить один или несколько фильмов");
      console.error(error);
    }
  }

  const visibleMovies = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const sortingString = `${sortBy}-${sortingOrder}`;
    return getVisibleMovies(
      [...movies],
      query,
      sortingString
    );
    
  }, [movies, sortBy, sortingOrder, searchQuery]);

  if (isLoading) {
    return <div className="container movies__container">Загрузка...</div>;
  }

  if (error) {
    return <div className="container movies__container">Ошибка: {error}</div>;
  }

  return (
    <div className="container movies__container">

      <div className="movies__title-and-buttons">
        <h2 className="title-h2">Список фильмов</h2>
        <div className="movies__buttons">
          <button
            className="button button--primary"
            onClick={() => setIsAddModalOpen(true)}
          >
            Добавить
          </button>
          <button
            className="button button--danger"
            onClick={handleDeleteSelectedMovies}
            disabled={selectedMovieIds.length === 0}
          >
            Удалить ({selectedMovieIds.length})
          </button>
        </div>
      </div>

      <div className="movies__search-and-sorting">
        <SearchInput
          className="movies__search"
          value={searchQuery}
          setValue={setSearchQuery}
        />
        <SelectInput
          options={sortByOptions}
          value={sortBy}
          setValue={setSortBy}
        />
        <SelectInput
          options={sortingOrderOptions}
          value={sortingOrder}
          setValue={setSortingOrder}
        />
      </div>

      <MoviesTable
        movies={visibleMovies}
        selectedMovieIds={selectedMovieIds}
        onToggleMovieSelection={handleToggleMovieSelection}
      />

      <AddMovieModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddMovie={handleAddMovie}
      />
    </div>
  )
}