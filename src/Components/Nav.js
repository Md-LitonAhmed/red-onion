import React, { useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import img from "../images/icons/logo2.png";
import "./Nav.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
//import Button from '@mui/material/Button';

export default function Nav() {
  // const [signDisplay, setSignDisplay] = useState("Sign in");
  // const auth = getAuth();
  const navigate = useNavigate();

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     setSignDisplay("Signout");
  //   } else {
  //     // User is signed out
  //     setSignDisplay("Sign in");
  //   }
  // });
  // const handler = () => {
  //   signOut(auth)
  //     .then(() => {
  //       // Sign-out successful.
  //     })
  //     .catch((error) => {
  //       // An error happened.
  //     });
  // };
  const signupHandler = () => {
    navigate("/signup");
  };
  const signinHandler = () => {
    navigate("/signin");
  };
  return (
    <div className="contain">
      <img id="imgId" src={img} alt="Logo" />
      <div className="Nav">
        <ShoppingCartOutlinedIcon />
        {/* <Button variant="outline-info">
          <Link>Signin</Link>
        </Button> */}
        <Button variant="danger" onClick={signinHandler}>
          Sign in
          {/* <NavLink to="/signin">Sign in</NavLink> */}
        </Button>
        <Button onClick={signupHandler}>
          SignUp
          {/* <NavLink to="/signup">SignUp</NavLink> */}
        </Button>
      </div>
    </div>
  );
}
