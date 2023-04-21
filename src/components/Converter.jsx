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
  const { baseCurrency, convertTo, setConvertTo } = props;
  const { id } = useParams();
  setConvertTo(id);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (event) => {
    event.preventDefault();
    let amount = event.target.value;
    setAmount(amount);
  };
  const conversion = () => {
    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${amount}&from=${baseCurrency}&to=${convertTo}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let total = data.rates[convertTo];
        setTotal(total);
        console.log(data);
      });
  };

  const doTheSwap = (event) => {
    event.preventDefault();
    //setBaseCurrency(convertTo);
    //setConvertTo(baseCurrency);
  };
  useEffect(() => {
    conversion();
  }, [amount]);
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
        <h1>{total}</h1>

        <Link to={`/converter/chart/${convertTo}`}>View 30-Day Chart</Link>
      </div>
      <Footer />
    </div>
  );
}
