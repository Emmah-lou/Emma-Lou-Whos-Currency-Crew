import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home_BaseRate from "./Home_BaseRate";
import Home_BaseRateList from "./Home_BaseRateList";
import "./Home.scss";

export default function Home(props) {
  const { baseCurrency, setBaseCurrency } = props;

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
      <div id="home-container">
        <Home_BaseRate
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          handleBaseRateChange={handleBaseRateChange}
        />
        <Home_BaseRateList
          baseCurrency={baseCurrency}
          setBaseCurrency={setBaseCurrency}
          baseRateList={baseRateList}
          setBaseRateList={setBaseRateList}
        />
      </div>
      <Footer />
    </div>
  );
}
