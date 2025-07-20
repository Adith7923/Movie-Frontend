import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import MovieFrame from "../../components/cards/MovieFrame"; // Make sure this is implemented
import LatestMovies from "../../layouts/LatestMovies";

const UserDashboard = () => {
  const [latestMovies, setLatestMovies] = useState([]);
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/user/movie/${id}`);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/movies/top-rated"
        );
        setLatestMovies(res.data);
      } catch (err) {
        console.error("Error fetching top movies:", err);
      }
    };

    getMovies();
  }, []);

  const featuredMovie = latestMovies.length > 0 ? latestMovies[0] : null;

  return (
    <div>
      {/* Movie Frame at top */}
      {featuredMovie && (
        <MovieFrame
          image={`data:${featuredMovie.image.contentType};base64,${featuredMovie.image.data}`}
          title={featuredMovie.title}
        />
      )}

      {/* Latest Movies grid */}
      <LatestMovies
        movies={latestMovies.map((movie) => ({
          ...movie,
          image: movie.image?.data
            ? `data:${movie.image.contentType};base64,${movie.image.data}`
            : "/fallback.jpg", // or any default image path
        }))}
        onMovieClick={handleMovieClick}
      />
    </div>
  );
};

export default UserDashboard;
