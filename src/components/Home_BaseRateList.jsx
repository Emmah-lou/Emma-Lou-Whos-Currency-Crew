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
  const { baseRateList, setBaseRateList, baseCurrency } = props;
  const fetchBaseRateList = async () => {
    const host = "api.frankfurter.app";
    fetch(`https://${host}/latest?from=${baseCurrency}`)
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
      <ul className="rates-list">
        {baseRateListArray.map((item) => {
          return <ExchangeItem currency={item[0]} rate={item[1]} />;
        })}
      </ul>
    </div>
  );
}
