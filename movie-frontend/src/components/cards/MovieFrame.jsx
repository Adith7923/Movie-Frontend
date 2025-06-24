import React from "react";
import PropTypes from "prop-types";
import styles from "./MovieFrame.module.css";

const MovieFrame = ({ title, backgroundImage }) => {
  return (
    <div
      className={styles.movieFrame}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>Now on movies</p>
      </div>
    </div>
  );
};

MovieFrame.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

export default MovieFrame;
