import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieCard.module.css";

const MovieCard = ({ title, rating, image, onClick }) => {
  const backgroundImage = image ? `url(${image})` : "url(/fallback.jpg)"; // Replace with your fallback image if needed

  return (
    <div
      className={styles.movieCard}
      onClick={onClick}
      style={{ backgroundImage }}
      role="button"
      aria-label={`Movie: ${title}`}
    >
      <div className={styles.movieOverlay}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieRating}>⭐ {rating}/5</p>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default MovieCard;
