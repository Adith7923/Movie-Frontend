import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieDetailLayout from "../../layouts/MovieDetailLayout";
import ReviewCard from "../../components/cards/ReviewCard"; // Adjust path if needed

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/movies/${id}`);
        setMovie(res.data);
      } catch (err) {
        setError("Failed to fetch movie.");
      } finally {
        setLoading(false);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/reviews/movie/${id}`
        );

        setReviews(res.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchMovie();
    fetchReviews();
  }, [id]);

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
        onReviewClick={() => alert("Redirect to review form")}
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
    </>
  );
};

export default MovieDetailsPage;
