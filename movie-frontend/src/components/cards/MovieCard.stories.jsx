import React from "react";
import MovieCard from "./MovieCard";

export default {
  title: "Components/MovieCard",
  component: MovieCard,
};

const Template = (args) => <MovieCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Inception",
  rating: 4.8,
  image:
    "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_UF1000,1000_QL80_.jpg",
  onClick: () => alert("Card clicked!"),
};
