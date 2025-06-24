import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, onClick, variant = "primary" }) => {
  const base = "px-4 py-2 rounded font-semibold transition";
  const styles = {
    primary: "bg-yellow-500 text-black hover:bg-yellow-600",
    secondary:
      "bg-black text-yellow-500 hover:text-yellow-300 border border-yellow-500",
  };

  return (
    <button className={`${base} ${styles[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
