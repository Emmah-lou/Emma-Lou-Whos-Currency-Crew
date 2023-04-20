import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <button className="home-button">Home</button>
      </Link>
      <h1>Emma-Lou-Who's Currency Crew</h1>
    </div>
  );
}
