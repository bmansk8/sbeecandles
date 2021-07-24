import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <img src='https://sbee-candles.s3.amazonaws.com/logo.jpg' alt="logo" id="logo" />
        <div>
          <h1>SBee Candles</h1>
          <p>north georgia bees wax candles</p>
        </div>
      </header>
      <div id="contact_info">
        <h2>Contact Info</h2>
        <p>
          Want to buy a candle or see where I will be selling next? Drop me
          line.
        </p>
        <ul>
          <li>404-259-5155</li>
          <li>SBeecandles@gmail.com</li>
        </ul>
      </div>

      <div id="benifits">
        <h2>What are the benifits of sbee candles?</h2>
        <ul>
          <li>Hypo-allergenic</li>
          <li>non toxic</li>
          <li>Perfume free</li>
          <li>Dye Free</li>
          <li>chemical free</li>
          <li>emits negative ions known to purify the air *</li>
          <li>locally sourced north georgia beeswax</li>
          <li>sustainble harvesting of wax</li>
          <li>100% cotton wicks (lead free)</li>
          <li>small batch</li>
          <li>hand poured</li>
          <li>And so many more...</li>
        </ul>

        <p>* limited scientific evidence</p>
      </div>

      <footer>
        <p>made by Barron Brock with create-react-app and AWS amplify</p>
      </footer>
    </div>
  );
}

export default App;
