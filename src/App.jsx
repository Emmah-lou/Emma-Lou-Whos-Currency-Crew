import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Converter from "./components/Converter";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Converter />} />
    </Routes>
  );
}

export default App;
