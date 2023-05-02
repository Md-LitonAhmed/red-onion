import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import firebaseConfig from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let handle = () => {
    if (!email && !password) {
      setError("Email and password must be Submitted");
    } else if (!email) {
      setError("Enter Your Email");
    } else if (!password) {
      setError("Enter your Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setError("");
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/invalid-email") {
            setError("Invalid Password");
          } else if (error.code == "auth/wrong-password") {
            setError("Invalid Password");
          } else {
            setError("");
          }
        });
    }
  };
  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });
  return (
    <div className="signinn">
      <div id="signin">
        <div className="signin">
          <h2>Login your account</h2>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          <p>{error}</p>
          <button onClick={handle}>Signin</button>
          <Link to="/signup">You don't have a account? Signup</Link>
        </div>
      </div>
    </div>
  );
}
