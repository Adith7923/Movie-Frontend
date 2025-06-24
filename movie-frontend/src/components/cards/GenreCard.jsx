import React from "react";
import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";

const GenreCard = ({ genre }) => {
  return (
    <div className={styles.genreCard}>
      <h2 className={styles.genreHeading}>{genre}</h2>
    </div>
  );
};

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
};

export default GenreCard;
