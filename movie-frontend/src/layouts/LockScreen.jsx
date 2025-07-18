import React, { useState } from "react";
import InputBox from "../components/inputbox/InputBox";
import styles from "./LockScreen.module.css"; // assume LockScreen styles
import Logo from "../assets/MovieLogo.png"; // assume logo is in assets folder

const LockScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // login logic here
  };

  return (
    <div className={styles.lockScreenContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Cinephile</h2>
      </div>
      <h1 className={styles.welcomeText}>Welcome Back!</h1>
      <InputBox
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputBox
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className={styles.loginButton} onClick={handleLogin}>
        Login
      </button>

      <p className={styles.signupText}>
        Not an existing user? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default LockScreen;
