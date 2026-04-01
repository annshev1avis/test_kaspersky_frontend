export function filterMovies(movies, query) {
    return movies.filter((movie) => {
      if (!query) {
        return true;
      }

      return (
        movie.title.toLowerCase().includes(query) ||
        movie.genre.toLowerCase().includes(query) ||
        movie.actors.join(" ").toLowerCase().includes(query)
      )
    });
}


export function sortMovies(movies, sortingString) {
    switch (sortingString) {
      case 'title-asc':
        return movies.sort((a, b) => a.title.localeCompare(b.title));

      case 'title-desc':
        return movies.sort((a, b) => b.title.localeCompare(a.title));

      case 'year-asc':
        return movies.sort((a, b) => a.year - b.year);

      case 'year-desc':
        return movies.sort((a, b) => b.year - a.year);

      case 'rating-asc':
        return movies.sort((a, b) => a.rating - b.rating);

      case 'rating-desc':
        return movies.sort((a, b) => b.rating - a.rating);

      default:
        return movies;
    }
}


export function getVisibleMovies(movies, query, sortingString) {
    const filteredMovies = filterMovies(movies, query);
    return sortMovies(filteredMovies, sortingString);
}