import React from "react";
import PropTypes from "prop-types";
import styles from "./LockScreenImage.module.css";

const LockScreenImage = ({ src, alt }) => {
  return (
    <div className={styles.lockScreenImageContainer}>
      <img src={src} alt={alt} className={styles.lockScreenImage} />
    </div>
  );
};

LockScreenImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default LockScreenImage;
