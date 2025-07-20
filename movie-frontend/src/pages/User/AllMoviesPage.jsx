import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../../components/searchbar/SearchBar"; // Adjust if needed
import MovieCard from "../../components/cards/MovieCard"; // Assuming you're using MovieCard

const AllMoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/api/movies").then((res) => {
      setMovies(res.data);
    });
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "3vw" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
        }}
      >
        <h2 style={{ color: "yellow", fontSize: "28px", margin: 0 }}>
          All Movies
        </h2>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search movies..."
        />
      </div>

      {/* 🟡 Movie Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "flex-start",
        }}
      >
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard
              key={movie._id}
              title={movie.title}
              rating={movie.rating}
              image={
                movie.image?.data
                  ? `data:${movie.image.contentType};base64,${movie.image.data}`
                  : ""
              }
              onClick={() =>
                (window.location.href = `/user/movie/${movie._id}`)
              }
            />
          ))
        ) : (
          <p style={{ color: "white" }}>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default AllMoviesPage;