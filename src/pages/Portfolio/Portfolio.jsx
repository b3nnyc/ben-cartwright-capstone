import { Component } from "react";

const INITIAL_STATE = {
  ticker: "",
  position: "BUY",
  quantity: 10,
  price: 50,
};

export default class Portfolio extends Component {
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="portfolio">
            <div className="portfolio__title">
              <h2>Portfolio</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
