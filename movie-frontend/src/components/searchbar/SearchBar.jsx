import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchBar.module.css";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar = ({ placeholder, value, onChange }) => {
  const handleClear = () => {
    onChange({ target: { value: "" } });
  };

  return (
    <div className={styles.searchbarContainer}>
      {value ? (
        <FiX className={styles.searchbarIcon} onClick={handleClear} />
      ) : (
        <FiSearch className={styles.searchbarIconInactive} />
      )}
      <input
        type="text"
        className={styles.searchbarInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
