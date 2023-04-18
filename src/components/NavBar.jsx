import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Converter from "./Converter";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";
import "./Converter.scss";

export default function NavBar() {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Back</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}
