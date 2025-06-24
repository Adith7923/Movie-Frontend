import React from "react";
import ReviewCard from "./ReviewCard";

export default {
  title: "Components/ReviewCard",
  component: ReviewCard,
};

const Template = (args) => <ReviewCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  username: "Adith",
  rating: 4.5,
  movieTitle: "Inception",
  comment:
    "Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!Amazing visuals and storytelling. One of Nolan's best!",
};
