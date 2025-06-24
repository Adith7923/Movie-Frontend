import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";
import styles from "./MovieDetailLayout.module.css";

const MovieDetailLayout = ({
  image,
  title,
  rating,
  description,
  director,
  genre,
  language,
  releaseDate,
  onReviewClick,
}) => {
  return (
    <div className={styles.movieDetailContainer}>
      <img src={image} alt={title} className={styles.movieImage} />

      <div className={styles.movieContent}>
        <h1 className={styles.movieTitle}>{title}</h1>
        <p className={styles.movieRating}>⭐ {rating}/5</p>
        <p className={styles.movieDescription}>{description}</p>

        <div className={styles.movieMeta}>
          <p>
            <strong>Director:</strong> {director}
          </p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Language:</strong> {language}
          </p>
          <p>
            <strong>Release Date:</strong> {releaseDate}
          </p>
        </div>

        <button className={styles.reviewButton} onClick={onReviewClick}>
          <FaPlus className={styles.plusIcon} />
          Add Your Review
        </button>
      </div>
    </div>
  );
};

MovieDetailLayout.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  onReviewClick: PropTypes.func,
};

export default MovieDetailLayout;
