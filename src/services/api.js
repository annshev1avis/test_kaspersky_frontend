const BASE_URL = 'http://localhost:3001';

export async function getMovies() {
    const response = await fetch(`${BASE_URL}/movies`);

    if (!response.ok) {
        throw new Error('Не удалось загрузить список фильмов');
    }

    return response.json();
}


export async function createMovie(movieJson) {
    const response = await fetch(`${BASE_URL}/movies`, {
        method: "POST",
        headers: {
            "contentType": "application/json",
        },
        body: JSON.stringify(movieJson)
    });

    if (!response.ok) {
        throw new Error("Не удалось добавить фильм");
    }
    
    return response.json;
}


export async function deleteMovie(id) {
  const response = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Не удалось удалить фильм с id ${id}`);
  }
}