import React from "react";
import Signup from "./Signup";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Pages/Signup",
  component: Signup,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

const Template = (args) => <Signup {...args} />;

export const Default = Template.bind({});
Default.args = {};
