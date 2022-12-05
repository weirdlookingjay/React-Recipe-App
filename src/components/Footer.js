import React from "react";

export default function Footer() {
  return (
    <div className="footer container">
      <div className="footer-section">
        <p className="title">RecipesHub</p>
        <p>
          RecipesHub is a place where you can please your soul and tummy with
          delicious food recipes of all cuisine. And our service is absolutely
          free.
        </p>
        <p>&copy;2022 | All Rights Reserved</p>
      </div>
      <div className="footer-section">
        <p className="title">Contact Us</p>
        <p>info@RecipesHub.com</p>
        <p>(000) 000-0000</p>
        <p>123 SomeWhere in the USA</p>
      </div>
      <div className="footer-section">
        <p className="title">Socials</p>
        <p>Facebook</p>
        <p>Twitter</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}
