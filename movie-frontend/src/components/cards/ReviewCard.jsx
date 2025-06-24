import React from "react";
import PropTypes from "prop-types";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ username, rating, movieTitle, comment }) => {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.header}>
        <span className={styles.username}>{username}</span>
        <span className={styles.rating}>⭐ {rating}/5</span>
      </div>
      <h3 className={styles.movieTitle}>{movieTitle}</h3>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
};

ReviewCard.propTypes = {
  username: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  movieTitle: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default ReviewCard;
