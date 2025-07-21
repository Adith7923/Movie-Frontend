import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import UserDashboard from "./UserDashboard";
import MovieDetailsPage from "./MovieDetailsPage";
import AllMoviesPage from "./AllMoviesPage";
import GenrePage from "./GenrePage";
import GenreMoviesPage from "./GenreMoviesPage";
import AllReviewsPage from "./AllReviewsPage";
import ProtectedRoute from "../../components/auth/ProtectedRoutes"; // ✅

const navItems = [
  { label: "Dashboard", path: "/user/dashboard" },
  { label: "Movies", path: "/user/movies" },
  { label: "Genres", path: "/user/genres" },
  { label: "Reviews", path: "/user/reviews" },
];

const UserPage = () => {
  return (
    <div>
      <Navbar
        items={navItems}
        username="Adith"
        isDarkMode={false}
        onToggleTheme={() => {}}
      />

      <div>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" replace />} />

          {/* ✅ All Protected Routes */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="movie/:id"
            element={
              <ProtectedRoute>
                <MovieDetailsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="movies"
            element={
              <ProtectedRoute>
                <AllMoviesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="genres"
            element={
              <ProtectedRoute>
                <GenrePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="genre/:genreId"
            element={
              <ProtectedRoute>
                <GenreMoviesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="reviews"
            element={
              <ProtectedRoute>
                <AllReviewsPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default UserPage;
