import React from "react";
import PropTypes from "prop-types";
import styles from "./GenreCard.module.css";
import { useNavigate } from "react-router-dom";

const GenreCard = ({ genre, genreId }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.genreCard}
      onClick={() => navigate(`/user/genre/${genreId}`)}
    >
      <h2 className={styles.genreHeading}>{genre}</h2>
    </div>
  );
};

GenreCard.propTypes = {
  genre: PropTypes.string.isRequired,
  genreId: PropTypes.string.isRequired,
};

export default GenreCard;
