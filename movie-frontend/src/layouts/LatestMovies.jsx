import React from "react";
import PropTypes from "prop-types";
import styles from "./LatestMovies.module.css";
import MovieCard from "../components/cards/MovieCard"; // assumes MovieCard is ready

const LatestMovies = ({ movies, onMovieClick }) => {
  return (
    <div className={styles.latestMoviesContainer}>
      <h2 className={styles.heading}>Latest Movies</h2>
      <div className={styles.movieRow}>
        {movies.map((movie) => (
          <MovieCard
            key={movie._id}
            title={movie.title}
            rating={movie.rating}
            image={movie.image}
            onClick={() => onMovieClick(movie._id)}
          />
        ))}
      </div>
    </div>
  );
};

LatestMovies.propTypes = {
  movies: PropTypes.array.isRequired,
  onMovieClick: PropTypes.func,
};

export default LatestMovies;
