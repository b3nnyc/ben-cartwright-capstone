import React, { useState } from "react";
import axios from "axios";
import apiCall from "../../utils/apiCall";
import "./PortfolioForm.scss";

const init = {
  symbol: "",
  position: "Long",
  shares: 10,
  price: 50,
};

export default function PortfolioForm() {
  const [input, setInput] = useState(init);

  const handleChange = (event) => {
    setInput((input) => ({
      ...input,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStock = {
      symbol: input.symbol.toUpperCase(),
      position: input.position,
      shares: input.shares,
      price: input.price,
    };
    if (newStock.symbol && newStock.price > 0 && newStock.shares > 0) {
      axios
        .post("http://localhost:8080", {
          symbol: newStock.symbol,
          position: newStock.position,
          shares: newStock.shares,
          price: newStock.price,
        })
        .catch((error) => {
          console.log(error);
        });
    }
    window.location.reload();
  };

  return (
    <div>
      <form className="new-stock">
        <div className="new-stock__symbol">
          <p className="new-stock__title">Symbol</p>
          <input
            className="new-stock__symbol-form"
            type="text"
            name="symbol"
            value={input.symbol}
            onChange={handleChange}
          />
        </div>
        <div className="new-stock__position">
          <p className="new-stock__title">Position</p>
          <select
            className="new-stock__position-form"
            name="position"
            onChange={handleChange}
            value={input.position}
          >
            <option value="long">Long</option>
            <option value="short">Short</option>
          </select>
        </div>
        <div className="new-stock__shares">
          <p className="new-stock__title">Shares</p>
          <input
            className="new-stock__shares-form"
            type="number"
            name="shares"
            min="0"
            value={input.shares}
            onChange={handleChange}
          />
        </div>
        <div className="new-stock__price">
          <p className="new-stock__title">Price</p>
          <input
            className="new-stock__price-form"
            type="number"
            name="price"
            min="0"
            value={input.price}
            onChange={handleChange}
          />
        </div>
        <button className="new-stock__button" onClick={handleSubmit}>
          <span>+</span>
        </button>
      </form>
    </div>
  );
}
