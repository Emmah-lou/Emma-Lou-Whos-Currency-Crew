import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./NavBar.scss";
import "./Home.scss";
import "./Header.scss";
import "./Footer.scss";

export default function Converter(props) {
  const { id } = useParams();
  const { baseCurrency, setBaseCurrency } = props;
  const [rate, setRate] = useState(0);
  const [convertTo, setConvertTo] = useState(id);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);

  const handleAmountChange = (event) => {
    event.preventDefault();
    let amount = event.target.value;
    setAmount(amount);
  };
  useEffect(() => {
    conversion(id, convertTo);
  }, [convertTo]);
  const conversion = () => {
    console.log(baseCurrency, convertTo);
    const stockApiKey = "OMZGXK5NKES2KJV5";
    const webUrl = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${baseCurrency}&to_currency=${convertTo}&apikey=${stockApiKey}`;
    fetch(webUrl)
      .then((response) => response.json())
      .then((data) => {
        let rate = data["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
        setRate(rate);
        console.log(data);
        //console.log(data.rates[convertTo]);
      });
  };

  const doTheMath = () => {
    let result = amount * rate;
    setResult(result);
  };
  const doTheSwap = (event) => {
    event.preventDefault();
    setBaseCurrency(convertTo);
    setConvertTo(baseCurrency);
    doTheMath();
  };
  return (
    <div className="converter">
      <NavBar />
      <h1>
        <button onClick={doTheSwap}>swap</button>
        {baseCurrency} to {convertTo} is {rate}
      </h1>

      <form>
        <label htmlFor="amount">Enter Amount</label>
        <input
          onChange={handleAmountChange}
          name="amount"
          type="number"
          value={amount}
        />
        <button onClick={doTheMath}>Convert</button>
      </form>
      <h1>{result}</h1>

      <Link to="/converter/chart/:id">chart</Link>
      <Footer />
    </div>
  );
}
