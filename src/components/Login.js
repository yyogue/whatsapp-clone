import React from "react";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setUser }) => {
  const signIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Store user info
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <div className="login-container">
      <h1>Welcome to WhatsApp Clone</h1>
      <p>Sign in to start chatting with your friends!</p>
      <button onClick={signIn}>Login with Google</button>
    </div>
  );
};

export default Login;
