import React from "react";
import GenreCard from "./GenreCard";

export default {
  title: "Components/GenreCard",
  component: GenreCard,
  tags: ["autodocs"],
  argTypes: {
    genre: { control: "text" },
  },
};

const Template = (args) => <GenreCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  genre: "Action",
};

export const LongGenre = Template.bind({});
LongGenre.args = {
  genre: "Post-Apocalyptic Thriller",
};
