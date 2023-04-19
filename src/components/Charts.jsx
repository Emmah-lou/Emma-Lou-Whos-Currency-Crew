import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chart from "chart.js/auto";

import NavBar from "./NavBar";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";
import "./Converter.scss";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Charts(props) {
  const { convertTo, baseCurrency } = props;
  console.log(baseCurrency, convertTo);

  const [chartData, setChartData] = React.useState([]);
  const getChartData = () => {
    const stockApiKey = "OMZGXK5NKES2KJV5";
    const webUrl = `https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${baseCurrency}&to_symbol=${convertTo}&apikey=${stockApiKey}`;
    fetch(webUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data["Time Series FX (Daily)"]);
        for (let key in data["Time Series FX (Daily)"]) {
          let value = data["Time Series FX (Daily)"][key];

          let pointSets = {
            x: key,
            y: value["4. close"],
          };
          setChartData((chartData) => [...chartData, pointSets]);
        }
      });
  };
  useEffect(() => {
    getChartData();
  }, [convertTo, baseCurrency]);
  //turn this into a chart
  console.log(chartData);

  //const chartMap = chartData.map((data) => ({ date: data.x, rate: data.y }));

  //make the chart map only have 30 points
  const chartMap = chartData
    .map((data) => ({ date: data.x, rate: data.y }))
    .slice(0, 30);

  return (
    <div className="chart">
      <Header />
      <NavBar />
      <h1>
        {baseCurrency} - {convertTo} Chart Data
      </h1>
      <MyChart data={chartMap} />
      <Footer />
    </div>
  );
}
const MyChart = ({ data }) => (
  <LineChart width={400} height={200} data={data}>
    <XAxis dataKey="date" />
    <YAxis />
    <CartesianGrid strokeDasharray="7 7" />
    <Tooltip />
    <Line type="monotone" dataKey="rate" stroke="green" />
  </LineChart>
);
