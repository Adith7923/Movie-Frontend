import React from "react";
import ProfileSection from "./ProfileSection";

export default {
  title: "layouts/ProfileSection",
  component: ProfileSection,
};

const Template = (args) => <ProfileSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://i.pravatar.cc/150",
  name: "Adith T M",
  email: "adith@example.com",
  totalReviews: 15,
  onLogout: () => alert("Logged out!"),
};
