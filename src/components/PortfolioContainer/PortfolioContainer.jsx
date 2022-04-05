import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioForm from "../PortfolioForm/PortfolioForm";
import "./PortfolioContainer.scss";
import apiCall from "../../utils/apiCall";

export default function PortfolioContainer() {
  const [hideForm, showForm] = useState(false);
  const [portfolio, setPortfolio] = useState([]);
  const [livePrice, setLivePrice] = useState(0);

  useEffect(() => {
    const getStocks = async () => {
      const response = await fetch(`http://localhost:8080`);
      const res = await response.json();

      if (res) {
        const mapStocks = Object.keys(res).map((key) => ({
          id: res[key]["id"],
          symbol: res[key]["symbol"],
          position: res[key]["position"],
          shares: res[key]["shares"],
          price: res[key]["price"],
        }));
        // if (portfolio !== mapStocks) {
        setPortfolio(mapStocks);
        // }
      }
    };
    getStocks();

    const pnlCalc = (price, currentPrice, position, shares) => {
      let pnl = 0;

      if (currentPrice) {
        if (position === "long") {
          pnl = (currentPrice - price) * shares;
        } else {
          pnl = (price - currentPrice) * shares;
        }
      }

      return pnl.toFixed(2);
    };
  }, []);

  function handleDelete(id) {
    axios.delete(`http://localhost:8080/${id}`).then((response) => {
      console.log("Successfully deleted portfolio item!", id);
    });
    window.location.reload();
  }

  return (
    <div className="portfolio-block">
      <div className="portfolio-container">
        <div className="portfolio-container__header">
          <div className="portfolio-container__row">Symbol</div>
          <div className="portfolio-container__row">Position</div>
          <div className="portfolio-container__row">Shares</div>
          <div className="portfolio-container__row">Price</div>
          <div className="portfolio-container__row">Current Price</div>
          <div className="portfolio-container__row">P&L</div>
        </div>
        {portfolio.map((stock) => {
          apiCall.getSingleStock(stock.symbol).then((res) => {
            //   setLivePrice(res.data.quoteResponse.result[0].regularMarketPrice);
            console.log(res.data.quoteResponse);
          });
          return (
            <div className="portfolio-item__row">
              <div className="portfolio-item__symbol">{stock.symbol}</div>
              <div className="portfolio-item__position">{stock.position}</div>
              <div className="portfolio-item__shares">{stock.shares}</div>
              <div className="portfolio-item__price">{stock.price}</div>
              <div className="portfolio-item__current-price">1000</div>
              <div className="portfolio-item__pnl">{2000}</div>
              <button
                className="portfolio-item__delete"
                onClick={() => handleDelete(stock.id)}
              >
                <span>-</span>
              </button>
            </div>
          );
        })}
      </div>

      {hideForm ? <PortfolioForm showForm={showForm} /> : null}
      <button className="add-button" onClick={() => showForm(!hideForm)}>
        <span>Add a Stock</span>
      </button>
    </div>
  );
}
