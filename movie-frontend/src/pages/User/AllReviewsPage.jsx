import React, { useEffect, useState } from "react";
import axios from "axios";
import ReviewCard from "../../components/cards/ReviewCard";
import SearchBar from "../../components/searchbar/SearchBar";

const AllReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/reviews");
        setReviews(res.data);
      } catch (err) {
        console.error("Error fetching all reviews:", err);
      }
    };

    fetchAllReviews();
  }, []);

  const filteredReviews = reviews.filter((review) => {
    const username = review.userId?.name || "Anonymous";
    const movieTitle = review.movieId?.title || "Unknown Movie";
    const comment = review.comment || "";
    const searchLower = search.toLowerCase();
    return (
      username.toLowerCase().includes(searchLower) ||
      movieTitle.toLowerCase().includes(searchLower) ||
      comment.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div style={{ padding: "3vw", color: "white" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <h2 style={{ color: "yellow", fontSize: "28px", margin: 0 }}>
          All Reviews
        </h2>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search reviews..."
        />
      </div>

      {/* Responsive Grid */}
      <div
        style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, 400px)",
    justifyContent: "center",
    gap: "40px",
  }}
      >
        {filteredReviews.map((review) => (
          <ReviewCard
            key={review._id}
            username={review.userId?.name || "Anonymous"}
            rating={review.rating}
            movieTitle={review.movieId?.title || "Unknown Movie"}
            comment={review.comment}
          />
        ))}
      </div>
    </div>
  );
};

export default AllReviewsPage;
