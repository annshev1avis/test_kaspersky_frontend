const BASE_URL = 'http://localhost:3001';

export async function getMovies() {
    const response = await fetch('http://localhost:3001/movies');

    if (!response.ok) {
        throw new Error('Не удалось загрузить список фильмов');
    }

    return response.json();
}