import React, { useState } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from "react-router-dom";
import InputBox from "../components/inputbox/InputBox";
import styles from "./LockScreen.module.css";
import Logo from "../assets/MovieLogo.png";

const LockScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/auth/signin", {
        email,
        password,
      });

      // Example: Save token to localStorage
      secureLocalStorage.setItem("token", response.data.token);
      secureLocalStorage.setItem("user", JSON.stringify(response.data.user)); // <-- use secureLocalStorage

      // Navigate to home or dashboard
      navigate("/user/dashboard"); // Or "/dashboard", etc.
    } catch (error) {
      setErrorMsg("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className={styles.lockScreenContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Cinephile</h2>
      </div>

      <h1 className={styles.welcomeText}>Welcome Back!</h1>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

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
        Not an existing user?{" "}
        <span
          style={{ cursor: "pointer", color: "yellow" }}
          onClick={() => navigate("/signup")}
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default LockScreen;
