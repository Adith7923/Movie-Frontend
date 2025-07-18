import React from "react";
import { MemoryRouter } from "react-router-dom";
import LockScreen from "./LockScreen";

export default {
  title: "Auth/LockScreen",
  component: LockScreen,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <LockScreen />;
