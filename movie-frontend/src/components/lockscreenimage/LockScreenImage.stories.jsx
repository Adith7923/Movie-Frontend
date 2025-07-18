import React from "react";
import LockScreenImage from "./LockScreenImage";
import sampleImage from "../../assets/LockImage.png"; // Replace with your actual image path

export default {
  title: "Components/LockScreenImage",
  component: LockScreenImage,
};

const Template = (args) => <LockScreenImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: sampleImage,
  alt: "Cinephile Illustration",
};
