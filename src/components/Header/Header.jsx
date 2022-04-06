import "./Header.scss";
import { React } from "react";
import { Link } from "react-router-dom";
import { TickerTape } from "react-ts-tradingview-widgets";
import logo from "../../assets/images/tmt.png";

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

export default function Header(props) {
  return (
    <section className="header">
      <div className="header__container">
        <div className="header__left">
          <a href="/">
            <img
              className="header__logo"
              src={logo}
              alt="TrackYourTrades logo"
            />
          </a>
        </div>
        <div className="header__right">
          <Link to={`/portfolio/`}>
            <button className="header__button">PORTFOLIO</button>
          </Link>
          <form onSubmit={(e) => props.setSearch(e)}>
            <input
              id="search"
              type="text"
              className="header__search"
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
