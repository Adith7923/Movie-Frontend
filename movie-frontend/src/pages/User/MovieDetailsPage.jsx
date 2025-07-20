import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetailLayout from "../../layouts/MovieDetailLayout";
import ReviewCard from "../../components/cards/ReviewCard";
import ReviewModal from "../../components/modals/ReviewModal";
import { toast } from "react-hot-toast";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reviewRating, setReviewRating] = useState("");
  const [reviewComment, setReviewComment] = useState("");

  const fetchMovie = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/api/movies/${id}`);
      setMovie(res.data);
    } catch (err) {
      setError("Failed to fetch movie details.");
      console.error("Error fetching movie details:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/reviews/movie/${id}`
      );
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  useEffect(() => {
    fetchMovie();
    fetchReviews();
  }, [id]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    setReviewRating("");
    setReviewComment("");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Optionally reset errors here too if the modal has local error states that aren't cleared by child
  };

  // This function correctly uses the 'reviewRating' and 'reviewComment'
  // states, which are updated by the ReviewModal's onChange handlers.
  const handleSubmitReview = async () => {
    // Input validation (already present and correct)
    const ratingNum = Number(reviewRating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) { // Updated to 0-5 range
      toast.error("Rating must be a number between 0 and 5.");
      return;
    }
    if (!reviewComment.trim()) {
      toast.error("Please provide a comment.");
      return;
    }

    try {
      const res = await axios.post(`http://localhost:3000/api/reviews/${id}`, {
      rating: ratingNum, // movieId is now in the URL, so remove from body if not needed
      comment: reviewComment,
        // userId: 'your_logged_in_user_id_here', // Essential for user-specific reviews
      });

      toast.success(res.data.message || "Review submitted successfully!");
      fetchReviews();
      handleCloseModal();
    } catch (err) {
      console.error("Error submitting review:", err);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to submit review. Please try again.");
      }
    }
  };

  if (loading)
    return <p style={{ color: "white", padding: "20px" }}>Loading...</p>;
  if (error) return <p style={{ color: "red", padding: "20px" }}>{error}</p>;
  if (!movie)
    return <p style={{ color: "white", padding: "20px" }}>Movie not found</p>;

  const imageSrc = movie.image?.data
    ? `data:${movie.image.contentType};base64,${movie.image.data}`
    : "";

  return (
    <>
      <MovieDetailLayout
        image={imageSrc}
        title={movie.title}
        rating={movie.rating}
        description={movie.description}
        director={movie.director}
        genre={movie.genre?.name || "N/A"}
        language={movie.language}
        releaseDate={new Date(movie.releaseDate).toLocaleDateString()}
        onReviewClick={handleOpenModal}
      />
      <h3
        style={{
          color: "yellow",
          paddingLeft: "3vw",
          marginTop: "2rem",
          fontSize: "24px",
        }}
      >
        User Reviews
      </h3>
      <div
        style={{
          display: "flex",
          gap: "66px",
          overflowX: "auto",
          padding: "36px 3vw  ",
          scrollSnapType: "x mandatory",
        }}
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review._id}
            username={review.userId?.name || "Anonymous"}
            rating={review.rating}
            movieTitle={movie.title}
            comment={review.comment}
          />
        ))}
      </div>

      <ReviewModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        rating={reviewRating}
        comment={reviewComment}
        setRating={setReviewRating}
        setComment={setReviewComment}
        onSubmit={handleSubmitReview} 
      />
    </>
  );
};

export default MovieDetailsPage;