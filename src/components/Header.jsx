import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Converter from "./Converter";
import NavBar from "./NavBar";
import "./NavBar.scss";
import "./Home.scss";

import "./Footer.scss";
import "./Converter.scss";

export default function Header() {
  return (
    <div className="header">
      <h1>Emma-Lou-Who's Currency Crew</h1>
    </div>
  );
}
