import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar"; // Adjusted relative path
import UserDashboard from "./UserDashboard";
import MovieDetailsPage from "./MovieDetailsPage";
import AllMoviesPage from "./AllMoviesPage"; // Adjust path if needed
import GenrePage from "./GenrePage"; // Adjust path if needed
import GenreMoviesPage from "./GenreMoviesPage"; // Adjust path if needed
import AllReviewsPage from "./AllReviewsPage";

const navItems = [
  { label: "Dashboard", path: "/user/dashboard" },
  { label: "Movies", path: "/user/movies" },
  { label: "Genres", path: "/user/genres" },
  { label: "Reviews", path: "/user/reviews" },

  // Add more items as needed
];

const UserPage = () => {
  return (
    <div>
      {/* Navbar is shown on all user pages */}
      <Navbar
        items={navItems}
        username="Adith"
        isDarkMode={false}
        onToggleTheme={() => {}}
      />

      {/* Page container */}
      <div>
        <Routes>
          {/* Redirect /user to /user/dashboard */}
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          {/* These are relative to /user */}
          <Route path="dashboard" element={<UserDashboard />} />
          <Route path="movie/:id" element={<MovieDetailsPage />} />
          <Route path="movies" element={<AllMoviesPage />} />
          <Route path="genres" element={<GenrePage />} />
          <Route path=" genre/:genreId" element={<GenreMoviesPage />} />
          <Route path="reviews" element={<AllReviewsPage />} />{" "}
          {/* Future Routes */}
          {/* <Route path="profile" element={<Profile />} /> */}
          {/* <Route path="reviews" element={<UserReviews />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default UserPage;
