import React from "react";
import PropTypes from "prop-types";
import styles from "./ProfileSection.module.css";

const ProfileSection = ({ image, name, email, totalReviews, onLogout }) => {
  return (
    <div className={styles.profileContainer}>
      <img src={image} alt={name} className={styles.profileImage} />

      <div className={styles.profileDetails}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.email}>{email}</p>
        <p className={styles.reviews}>Total Reviews: {totalReviews}</p>
      </div>

      <button className={styles.logoutButton} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

ProfileSection.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  totalReviews: PropTypes.number.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default ProfileSection;
