import React from "react";
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
  const [baseCurrency, setBaseCurrency] = React.useState("AUD");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home baseCurrency={baseCurrency} setBaseCurrency={setBaseCurrency} />
        }
      />
      <Route
        path={"/converter/:id"}
        element={
          <Converter
            baseCurrency={baseCurrency}
            setBaseCurrency={setBaseCurrency}
          />
        }
      />
      <Route path="/converter/chart/:id" element={<Chart />} />
      <Route path="/NotFound" element={<NotFound />} />
    </Routes>
  );
}

export default App;
