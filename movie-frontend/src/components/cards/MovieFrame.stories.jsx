import React from "react";
import MovieFrame from "./MovieFrame";

export default {
  title: "Components/MovieFrame",
  component: MovieFrame,
};

const Template = (args) => <MovieFrame {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Interstellar",
  backgroundImage: "https://i.imgur.com/YOzEUKy.jpg", // Replace with your image
};
