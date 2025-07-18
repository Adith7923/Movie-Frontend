import React from "react";
import ReviewCard from "../components/cards/ReviewCard";
import PropTypes from "prop-types";

const MovieReviewsLayout = ({ reviews, movieTitle }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div style={{ padding: "20px", color: "#ccc", fontSize: "18px" }}>
        No reviews yet.
      </div>
    );
  }

  return (
    <div style={{ marginTop: "40px" }}>
      <h2 style={{ color: "yellow", marginLeft: "16px" }}>User Reviews</h2>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "20px",
          padding: "16px",
          scrollSnapType: "x mandatory",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            username={review.userId?.name || "Anonymous"}
            rating={review.rating}
            movieTitle={movieTitle}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
};

MovieReviewsLayout.propTypes = {
  reviews: PropTypes.array.isRequired,
  movieTitle: PropTypes.string.isRequired,
};

export default MovieReviewsLayout;
