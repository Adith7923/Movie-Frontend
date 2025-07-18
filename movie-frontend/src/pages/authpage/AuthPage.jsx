import React, { useState } from "react";
import LockScreen from "../../layouts/LockScreen";
import Signup from "../../layouts/Signup";
import LockScreenImage from "../../components/lockscreenimage/LockScreenImage";
import styles from "./AuthPage.module.css";
import LockImage from "../../assets/LockImage.png"; // assume LockImage is in assets folder
const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup((prev) => !prev);
  };

  return (
    <div className={styles.authPageContainer}>
      <div className={styles.imageSection}>
        <LockScreenImage src={LockImage} alt="Cinephile" />
      </div>

      <div className={styles.formSection}>
        {isSignup ? (
          <Signup onToggleForm={toggleForm} />
        ) : (
          <LockScreen onToggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;
