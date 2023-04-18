export default function Home_BaseRate(props) {
  const {
    handleBaseRateChange,
    baseCurrency,
    setBaseCurrency,
    baseRate,
    setBaseRate,
  } = props;
  console.log(baseCurrency);
  return (
    <div className="home__baseRate">
      <form onChange={handleBaseRateChange} id="home-base-rate">
        <label htmlFor="baseCurrency">Base Rate</label>
        <select name="baseCurrency" id="baseCurrency">
          <option value="USD">USD</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="CAD">CAD</option>
        </select>
      </form>
    </div>
  );
}
