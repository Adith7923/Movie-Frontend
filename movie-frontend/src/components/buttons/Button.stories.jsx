import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  label: "Watch Now",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Add to Favorites",
  variant: "secondary",
};
