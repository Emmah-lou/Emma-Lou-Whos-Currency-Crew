import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Converter from "./Converter";
import NavBar from "./NavBar";
import Chart from "./Chart";
import Home_BaseRate from "./Home_BaseRate";
import Home_BaseRateList from "./Home_BaseRateList";
import "./Chart.scss";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";
import "./Converter.scss";

export default function Home() {
  const [baseCurrency, setBaseCurrency] = React.useState("USD");
  const [baseRate, setBaseRate] = React.useState(1);
  const [baseRateList, setBaseRateList] = React.useState([]);

  const handleBaseRateChange = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setBaseCurrency(event.target.value);
    //console.log(baseCurrency);
  };

  return (
    <div className="home">
      <Header />
      <NavBar />
      <Home_BaseRate
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        baseRate={baseRate}
        setBaseRate={setBaseRate}
        handleBaseRateChange={handleBaseRateChange}
      />
      <Home_BaseRateList
        baseCurrency={baseCurrency}
        setBaseCurrency={setBaseCurrency}
        baseRate={baseRate}
        setBaseRate={setBaseRate}
        baseRateList={baseRateList}
        setBaseRateList={setBaseRateList}
      />
    </div>
  );
}
