import "./Footer.scss";

import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Converter from "./Converter";

import "./Home.scss";
import "./Header.scss";
import "./Converter.scss";

export default function Footer() {
  return (
    <div className="footer">
      <hr />
      <p>© 2021 Emma-Lou-Who's Currency Crew</p>
    </div>
  );
}
