import RatingStars from "./RatingStars";

export default {
  title: "Components/RatingStars",
  component: RatingStars,
};

const Template = (args) => <RatingStars {...args} />;

export const ThreeStars = Template.bind({});
ThreeStars.args = { rating: 3 };

export const FullRating = Template.bind({});
FullRating.args = { rating: 5 };
