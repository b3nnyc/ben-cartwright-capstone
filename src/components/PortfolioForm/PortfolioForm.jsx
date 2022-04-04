import React, { useState } from "react";
import axios from "axios";
import "./PortfolioForm.scss";

const init = {
  symbol: "",
  position: "Buy",
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
  };

  return (
    <div className="new-stock">
      <form>
        <div className="new-stock__row">
          <input
            type="text"
            name="symbol"
            value={input.symbol}
            onChange={handleChange}
          />
        </div>
        <div className="new-stock__row">
          <select
            name="position"
            onChange={handleChange}
            value={input.position}
          >
            <option value="buy">Buy</option>
            <option value="sell">Short</option>
          </select>
        </div>
        <div className="new-stock__row">
          <input
            type="number"
            name="shares"
            min="0"
            value={input.shares}
            onChange={handleChange}
          />
        </div>
        <div className="new-stock__row">
          <input
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
