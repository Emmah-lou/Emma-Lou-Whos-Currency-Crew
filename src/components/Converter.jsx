import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";

export default function Converter() {
  return (
    <div className="converter">
      <NavBar />
      <h1>converter</h1>
      <Link to="/converter/chart">chart</Link>
    </div>
  );
}
