import React from "react";
import "./Footer.css";
import image from "../images/icons/logo.png";

export default function Footer() {
  return (
    <div className="commonDiv">
      <div className="footer">
        <div className="imgDiv">
          <img style={{ height: "40px" }} src={image} />
        </div>

        <div>
          <ul>
            <li>
              <a href="#">About Online Food</a>
            </li>
            <li>
              <a href="#">Read Our Blog</a>
            </li>
            <li>
              <a href="#">Sign Up to Deliver</a>
            </li>
            <li>
              <a href="#">Add your Restaurant</a>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li>
              <a href="#">Get help</a>
            </li>
            <li>
              <a href="#">Read FAQS</a>
            </li>
            <li>
              <a href="#">View All cities</a>
            </li>
            <li>
              <a href="#">Restaurant near me</a>
            </li>
          </ul>
        </div>

        <div className="privacy com">
          <a href="#"> Privacy Policy</a>
        </div>
        <div className="terms com">
          <a href="#">Terms Of Use</a>
        </div>
        <div className="price com">
          <a href="#">Pricing</a>
        </div>
      </div>

      <div className="copy">
        <p>copyright@ 2023 Online Food </p>
      </div>
    </div>
  );
}
