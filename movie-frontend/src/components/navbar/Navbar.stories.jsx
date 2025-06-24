import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { label: "Home", path: "/" },
    { label: "Movies", path: "/movies" },
    { label: "Genres", path: "/genres" },
  ],
  username: "Adith",
  isDarkMode: false,
  onToggleTheme: () => alert("Toggled theme!"),
};
