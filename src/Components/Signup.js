import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const auth = getAuth();
  const navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  const handle = () => {
    if (!name && !email && !password) {
      setError("Fill all the details");
    } else if (!name) {
      setError("Enter Your Name");
    } else if (!email) {
      setError("Enter Your Email");
    } else if (!password) {
      setError("Enter Your Password");
    } else if (password.length < 8) {
      setError("Password must be eight charecters");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://www.w3schools.com/howto/img_avatar.png",
          }).then(() => {
            // Profile updated!
            setError("");
            navigate("/signin");
          });
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/email-already-in-use") {
            setError("Email already used");
          } else {
            setError("");
          }
        });
    }
  };

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     navigate("/");
  //   }
  // });

  return (
    <div className="signupp">
      <div id="signup">
        <div className="signup">
          <h2>Create a account</h2>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
          />
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
          <button onClick={handle}>Signup</button>
          <Link to="/signin">Already have a account</Link>
        </div>
      </div>
    </div>
  );
}
