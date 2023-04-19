export default function Home_BaseRate(props) {
  const {
    handleBaseRateChange,
    baseCurrency,
    setBaseCurrency,
    baseRate,
    setBaseRate,
  } = props;

  return (
    <div className="home__baseRate">
      <form onChange={handleBaseRateChange} id="home-base-rate">
        <label htmlFor="baseCurrency">Base Rate</label>
        <select name="baseCurrency" id="baseCurrency">
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="CZK">CZY</option>
          <option value="DKK">DKK</option>
          <option value="GBP">GBP</option>
          <option value="HKD">HKD</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PHP">PHP</option>
          <option value="PLN">PLN</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="ZAR">ZAR</option>
        </select>
      </form>
    </div>
  );
}
