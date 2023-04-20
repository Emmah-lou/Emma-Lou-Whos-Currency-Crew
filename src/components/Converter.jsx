import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";

export default function Converter(props) {
  const { id } = useParams();
  const { baseCurrency, setBaseCurrency, convertTo, setConvertTo } = props;
  const [rate, setRate] = useState(0);
  //const [convertTo, setConvertTo] = useState(id);
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  setConvertTo(id);
  console.log(convertTo, baseCurrency, id);
  const handleAmountChange = (event) => {
    event.preventDefault();
    let amount = event.target.value;
    setAmount(amount);
  };
  useEffect(() => {
    conversion(id, convertTo);
    //console.log(baseCurrency, convertTo, id);
  }, [convertTo, amount]);
  const conversion = () => {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${amount}&from=${baseCurrency}&to=${convertTo}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let amount = data.rates[convertTo];
        setRate(amount);
        console.log(data);
      });
  };

  const doTheSwap = (event) => {
    event.preventDefault();
    setBaseCurrency(convertTo);
    setConvertTo(baseCurrency);
  };
  return (
    <div className="converter">
      <Header />
      <div id="converter-container">
        <h1>
          {baseCurrency} to {convertTo}
        </h1>
        <form>
          <button onClick={doTheSwap}>swap</button>
          <label htmlFor="amount">Enter Amount </label>
          <input
            onChange={handleAmountChange}
            name="amount"
            type="number"
            value={amount}
          />
        </form>
        <h1>{rate}</h1>

        <Link to={`/converter/chart/${convertTo}`}>View 30-Day Chart</Link>
      </div>
      <Footer />
    </div>
  );
}
