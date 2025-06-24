import React from "react";
import PropTypes from "prop-types";

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-600"}>
      ★
    </span>
  ));
  return <div className="text-lg">{stars}</div>;
};

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default RatingStars;
