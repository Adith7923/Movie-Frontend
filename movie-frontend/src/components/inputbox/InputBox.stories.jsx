import React, { useState } from "react";
import InputBox from "./InputBox";

export default {
  title: "Components/InputBox",
  component: InputBox,
};

const Template = (args) => {
  const [value, setValue] = useState("");
  return (
    <InputBox
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text here...",
};
