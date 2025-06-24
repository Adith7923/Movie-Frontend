import React, { useState } from "react";
import SearchBar from "./SearchBar";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <SearchBar
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search movies...",
};
