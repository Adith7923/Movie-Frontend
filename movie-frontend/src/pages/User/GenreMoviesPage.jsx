import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../../components/cards/MovieCard";
import SearchBar from "../../components/searchbar/SearchBar";

const GenreMoviesPage = () => {
  const { genreId } = useParams(); // ✅ Make sure it's genreId
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      console.log("Fetching movies for genreId:", genreId); // ✅ Check if ID is coming

      try {
        const res = await axios.get(
          `http://localhost:5000/api/movies/genre/${genreId}`
        );
        console.log("Fetched movies:", res.data); // ✅ Check data received
        setMovies(res.data);
      } catch (err) {
        console.error("Error fetching movies by genre:", err);
        setError("Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genreId]);

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p style={{ color: "white" }}>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "3vw", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "yellow" }}>Genre Movies</h2>
        <SearchBar
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "20px",
        }}
      >
        {filtered.length > 0 ? (
          filtered.map((movie) => <MovieCard key={movie._id} movie={movie} />)
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default GenreMoviesPage;
