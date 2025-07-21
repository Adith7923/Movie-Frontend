import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import InputBox from "../inputbox/InputBox";
import styles from "./ReviewModal.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import secureLocalStorage from "react-secure-storage";

const ReviewModal = ({ isOpen, onClose, rating, comment, setRating, setComment, onSubmit, id, fetchReviews, movie }) => {
  // ALL HOOKS MUST BE DECLARED AT THE TOP LEVEL OF THE COMPONENT,
  // BEFORE ANY CONDITIONAL RENDERING LOGIC.
  const [errors, setErrors] = useState({ rating: "", comment: "" });
  const ratingInputRef = useRef(null);

  // useEffect also must be at the top level
  useEffect(() => {
    if (isOpen && ratingInputRef.current) {
      ratingInputRef.current.focus();
    }
  }, [isOpen]);

  // Now, the conditional return comes AFTER all hooks
  if (!isOpen) {
    return null;
  }

  // Prevent error if movie is undefined
  const imageSrc = movie && movie.image?.data
    ? `data:${movie.image.contentType};base64,${movie.image.data}`
    : null;

  // --- Rest of your component logic (unchanged) ---

  const validateRating = (value) => {
    if (value.trim() === "") {
      return "Rating is required.";
    }
    const numValue = Number(value);
    if (isNaN(numValue) || numValue < 0 || numValue > 5) {
      return "Rating must be between 0 and 5.";
    }
    return ""; // No error
  };

  const validateComment = (value) => {
    if (!value.trim()) {
      return "Comment is required.";
    }
    return ""; // No error
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    let restrictedVal = value;
    if (value !== "") {
      const numVal = Number(value);
      if (!isNaN(numVal)) {
        if (numVal > 5) restrictedVal = "5";
        else if (numVal < 0) restrictedVal = "0";
      }
    }
    setRating(restrictedVal);
    setErrors((prev) => ({ ...prev, rating: "" }));
  };

  const handleRatingBlur = () => {
    const error = validateRating(rating);
    setErrors((prev) => ({ ...prev, rating: error }));
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    setErrors((prev) => ({ ...prev, comment: "" }));
  };

  const handleCommentBlur = () => {
    const error = validateComment(comment);
    setErrors((prev) => ({ ...prev, comment: error }));
  };

  const handleSubmit = () => {
    const ratingError = validateRating(rating);
    const commentError = validateComment(comment);

    setErrors({
      rating: ratingError,
      comment: commentError,
    });

    if (!ratingError && !commentError) {
      handleSubmitReview();
      setErrors({ rating: "", comment: "" });
      }
  };

  const handleSubmitReview = async () => {
    const ratingNum = Number(rating);
    if (isNaN(ratingNum) || ratingNum < 0 || ratingNum > 5) {
      toast.error("Rating must be a number between 0 and 5.");
      return;
    }
    if (!comment.trim()) {
      toast.error("Please provide a comment.");
      return;
    }

    // Get token from secureLocalStorage
    const token = secureLocalStorage.getItem("token");

    try {
      const res = await axios.post(
        `http://localhost:3000/api/reviews/${id}`,
        {
          rating: ratingNum,
          comment: comment,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success(res.data.message || "Review submitted successfully!");
      fetchReviews();
      onClose();
    } catch (err) {
      console.error("Error submitting review:", err);
      if (err.response && err.response.data && err.response.data.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Failed to submit review. Please try again.");
      }
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Write a Review</h2>

        <div className={styles.starRating}>
          {/* Your star rating component would go here */}
        </div>

        <label className={styles.modalLabel}>⭐ Rating (0-5):</label>
        <InputBox
          type="number"
          placeholder="Enter rating"
          value={rating}
          min={0}
          max={5}
          onChange={handleRatingChange}
          onBlur={handleRatingBlur}
          className={errors.rating ? styles.inputError : ""}
          ref={ratingInputRef}
        />
        {errors.rating && (
          <div className={styles.errorMessage}>
            {errors.rating}
          </div>
        )}

        <label className={`${styles.modalLabel} ${styles.labelTopMargin}`}>Comment:</label>
        <InputBox
          placeholder="Your review"
          value={comment}
          onChange={handleCommentChange}
          onBlur={handleCommentBlur}
          className={errors.comment ? styles.inputError : ""}
        />
        {errors.comment && (
          <div className={styles.errorMessage}>
            {errors.comment}
          </div>
        )}

        {imageSrc && <img src={imageSrc} alt="Movie" />}

        <div className={styles.modalButtons}>
          <button onClick={handleSubmit} className={styles.submitBtn}>Submit</button>
          <button onClick={onClose} className={styles.cancelBtn}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

ReviewModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  setRating: PropTypes.func.isRequired,
  setComment: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  fetchReviews: PropTypes.func.isRequired,
};

export default ReviewModal;