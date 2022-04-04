import { Component } from "react";
import PortfolioForm from "../../components/PortfolioForm/PortfolioForm";
import PortfolioContainer from "../../components/PortfolioContainer/PortfolioContainer";

export default function Portfolio() {
  return (
    <div className="background">
      <div className="container">
        <div className="portfolio">
          <div className="portfolio__title">
            <h2>Portfolio</h2>
          </div>
          <div>
            <PortfolioContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
