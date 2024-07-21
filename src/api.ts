const API_KEY = '0a06d67ddbfb0da39994d1abc5bc457a';
const BASE_URL = 'https://api.themoviedb.org/3';

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function getPopular() {
  return fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getNowPlaying() {
  return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getComingSoon() {
  return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function getMoviesDetails(movieId: number) {
  return fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
}

export function makeImagePath(id: string, format: string = 'original'): string {
  return `https://image.tmdb.org/t/p/${format}/${id}`;
}
