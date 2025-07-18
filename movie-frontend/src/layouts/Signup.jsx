import React, { useState } from "react";
import InputBox from "../components/inputbox/InputBox";
import styles from "./Signup.module.css";
import Logo from "../assets/MovieLogo.png"; // Adjust path as needed
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    // You can implement the signup API call here
    console.log("Signup:", { name, email, password });
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Cinephile</h2>
      </div>
      <h1 className={styles.welcomeText}>Sign Up</h1>

      <InputBox
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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

      <button className={styles.signupButton} onClick={handleSignup}>
        Sign Up
      </button>

      <p className={styles.loginText}>
        Already have an account?
        <span onClick={() => navigate("/login")}> Login</span>
      </p>
    </div>
  );
};

export default Signup;
