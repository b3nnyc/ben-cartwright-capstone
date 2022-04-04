import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioForm from "../PortfolioForm/PortfolioForm";
import "./PortfolioContainer.scss";

export default function PortfolioContainer() {
  const [hideForm, showForm] = useState(false);
  const [portfolio, setPortfolio] = useState([]);

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
        setPortfolio(mapStocks);
      }
    };
    getStocks();
  });

  function handleDelete(id) {
    axios.delete(`http://localhost:8080/${id}`).then((response) => {
      console.log("Successfully deleted portfolio item!", id);
    });
  }

  return (
    <div className="portfolio-container">
      <div className="portfolio-container__header">
        <div className="portfolio-container__row">Symbol</div>
        <div className="portfolio-container__row">Position</div>
        <div className="portfolio-container__row">Shares</div>
        <div className="portfolio-container__row">Price</div>
      </div>
      {portfolio.map((stock) => {
        return (
          <div className="portfolio-item__row">
            <div className="portfolio-item__symbol">{stock.symbol}</div>
            <div className="portfolio-item__position">{stock.position}</div>
            <div className="portfolio-item__shares">{stock.shares}</div>
            <div className="portfolio-item__price">{stock.price}</div>
            <button
              className="portfolio-item__delete"
              onClick={() => handleDelete(stock.id)}
            >
              <span>-</span>
            </button>
          </div>
        );
      })}
      {hideForm ? <PortfolioForm showForm={showForm} /> : null}
      <button className="add-button" onClick={() => showForm(!hideForm)}>
        <span>ADD STOCK</span>
      </button>
    </div>
  );
}
