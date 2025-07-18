import React from "react";
import PropTypes from "prop-types";
import styles from "./InputBox.module.css";

const InputBox = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      type={type}
      className={styles.inputBox}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

InputBox.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default InputBox;
