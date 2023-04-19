import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import NavBar from "./NavBar";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";
import "./Converter.scss";

export default function Chart(props) {
  const { convertTo, baseCurrency } = props;

  const getChartData = () => {
    const stockApiKey = "OMZGXK5NKES2KJV5";
    const webUrl = `https://www.alphavantage.co/query?function=FX_MONTHLY&from_symbol=${baseCurrency}&to_symbol=${convertTo}&apikey=${stockApiKey}`;
    fetch(webUrl)
      .then((resp) => resp.json())
      .then((resp) => console.log(resp))
      .catch((err) => console.error(err));
  };
  getChartData();
  return (
    <div className="chart">
      <Header />
      <NavBar />
      <h1>
        {baseCurrency} - {convertTo} Chart Data
      </h1>

      <Footer />
    </div>
  );
}

const ChartData = (props) => {
  <div>
    <canvas id="my-currency-chart"></canvas>
  </div>;
};
