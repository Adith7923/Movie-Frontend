import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Update to your backend
});

export const fetchAllMovies = () => API.get("/movies");
export const fetchMovieById = (id) => API.get(`/movies/${id}`);
export const fetchTopRatedMovies = () => API.get("/movies/top-rated");
export const fetchMoviesByGenre = (genre) => API.get(`/movies/genre/${genre}`);
export const addMovie = (data, token) =>
  API.post("/movies", data, {
    headers: { Authorization: `Bearer ${token}` },
  });
export const postReview = (movieId, review, token) =>
  API.post(`/reviews/${movieId}`, review, {
    headers: { Authorization: `Bearer ${token}` },
  });
