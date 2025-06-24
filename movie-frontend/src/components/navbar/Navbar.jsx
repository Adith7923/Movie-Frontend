import React from "react";
import PropTypes from "prop-types";
import styles from "./Navbar.module.css";
import { FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import MovieLogo from "../../assets/MovieLogo.png"; // <-- Import logo here

const Navbar = ({ items, username, onToggleTheme, isDarkMode }) => {
  const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoSection}>
        <img src={MovieLogo} alt="Logo" className={styles.logo} />
      </div>

      <ul className={styles.navItems}>
        {items.map((item, index) => (
          <li
            key={index}
            className={styles.navItem}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>

      <div className={styles.rightSection}>
        <button className={styles.iconButton} onClick={onToggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className={styles.profile} onClick={() => navigate("/profile")}>
          <FaUserCircle className={styles.profileIcon} />
          <span className={styles.username}>{username}</span>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
  username: PropTypes.string.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
};

export default Navbar;
