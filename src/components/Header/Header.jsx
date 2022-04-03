import "./Header.scss";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import { TickerTape } from "react-ts-tradingview-widgets";
import { useHistory } from "react-router-dom";

const styles = {
  symbols: [
    {
      proName: "FOREXCOM:SPXUSD",
      title: "S&P 500",
    },
    {
      description: "QQQ",
      proName: "NASDAQ:QQQ",
    },
    {
      description: "Meta",
      proName: "NASDAQ:FB",
    },
    {
      description: "Apple",
      proName: "NASDAQ:AAPL",
    },
    {
      description: "Amazon",
      proName: "NASDAQ:AMZN",
    },
    {
      description: "Netflix",
      proName: "NASDAQ:NFLX",
    },
    {
      description: "Google",
      proName: "NASDAQ:GOOG",
    },
    {
      description: "Tesla",
      proName: "NASDAQ:TSLA",
    },
  ],
  parent: {
    fontSize: "0px",
    lineHeight: "0px",
    color: "red",
  },
  link: {
    textDecoration: "line-trough",
  },
  span: {
    color: "darkblue",
  },
};

export default function Header() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = `"/stock/"${e.target.value}`;
    setInputText(lowerCase);
  };

  return (
    <section className="header">
      <div className="header__container">
        <div className="header__left">
          <a href="/">
            <img src="" alt="TrackYourTrades logo" />
          </a>
        </div>
        <div className="header__right">
          {/* <Link to={`/watchlist/`}>
          <button>WATCHLIST</button>
        </Link> */}
          <Link to={`/portfolio/`}>
            <button className="header__button">PORTFOLIO</button>
          </Link>
          {/* <Link to={`/login/`}>
          <button>LOGIN</button>
        </Link> */}
          <form action="/stock/" method="get">
            <input
              type="text"
              className="header__search"
              method="get"
              autoComplete="off"
              onSubmit={inputHandler}
              placeholder="Search"
            />
          </form>
        </div>
      </div>
      <TickerTape
        copyrightStyles={styles}
        line-height="0"
        symbols={styles.symbols}
      />
    </section>
  );
}
