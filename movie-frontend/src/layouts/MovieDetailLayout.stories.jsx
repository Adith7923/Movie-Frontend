import React from "react";
import MovieDetailLayout from "./MovieDetailLayout";
import Image from "../assets/Inception_(2010)_theatrical_poster.jpg";

export default {
  title: "Layouts/MovieDetailLayout",
  component: MovieDetailLayout,
};

const Template = (args) => <MovieDetailLayout {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: Image,
  title: "Inception",
  rating: 4.8,
  description:
    "A skilled thief is offered a chance to have his past crimes forgiven, as payment for the implantation of another person's idea into a target's subconscious.",
  director: "Christopher Nolan",
  genre: "Sci-Fi",
  language: "English",
  releaseDate: "2010-07-16",
  onReviewClick: () => alert("Navigating to review..."),
};
