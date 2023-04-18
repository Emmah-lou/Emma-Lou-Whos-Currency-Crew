import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Converter from "./components/Converter";
import Chart from "./components/Chart";
import "./App.scss";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/converter/:id" element={<Converter />} />
      <Route path="/converter/chart" element={<Chart />} />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
