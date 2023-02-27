import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '35bc88dde9b859b4a96d817ba0204f80',
};

export function fetchTrendingMovies() {
  return axios
    .get(`/trending/movie/day?`)
    .then(response => response.data.results);
}

export function fetchMovieDetails(movieId) {
  return axios.get(`/movie/${movieId}?`).then(response => response.data);
}

export function fetchMovieCast(movieId) {
  return axios
    .get(`/movie/${movieId}/credits?`)
    .then(response => response.data.cast);
}

export function fetchMovieReviews(movieId) {
  return axios
    .get(`/movie/${movieId}/reviews?`)
    .then(response => response.data.results);
}

export function fetchMoviesByQuery(query) {
  return axios
    .get(`/search/movie?&query=${query}`)
    .then(response => response.data.results);
}
