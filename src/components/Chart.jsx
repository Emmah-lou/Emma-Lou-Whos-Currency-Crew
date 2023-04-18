import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Converter from "./Converter";
import NavBar from "./NavBar";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";
import "./Converter.scss";

export default function Chart() {
  return (
    <div className="chart">
      <NavBar />
      <h1>Chart</h1>
    </div>
  );
}
