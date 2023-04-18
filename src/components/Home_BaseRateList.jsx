import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Home_BaseRateList.scss";

const ExchangeItem = (props) => {
  const { currency, rate } = props;
  return (
    <li>
      <Link to={`/converter/${currency}`}>{currency}</Link>
      {rate}
    </li>
  );
};

export default function Home_BaseRateList(props) {
  const apiKey = "d4fbf5790d-2814ab969c-rtb5pp";
  const { baseRateList, setBaseRateList, baseCurrency, setBaseCurrency } =
    props;
  const fetchBaseRateList = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ee7e6f64e6msh26819eaf8465f31p1543cajsn8a72a2d6df55",
        "X-RapidAPI-Host": "exchangerate-api.p.rapidapi.com",
      },
    };

    fetch(
      `https://exchangerate-api.p.rapidapi.com/rapid/latest/${baseCurrency}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setBaseRateList(response.rates))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchBaseRateList();
  }, [baseCurrency]);
  console.log(baseRateList);
  const baseRateListArray = Object.entries(baseRateList);
  console.log(baseRateListArray);
  return (
    <div className="home_baseRateList">
      <h1>Home_BaseRateList</h1>
      <ul className="rates-list">
        {baseRateListArray.map((item) => {
          return <ExchangeItem currency={item[0]} rate={item[1]} />;
        })}
      </ul>
    </div>
  );
}
