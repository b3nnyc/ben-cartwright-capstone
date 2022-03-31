import { Component } from "react";
import apiCall from "../../utils/apiCall";
import { MiniChart } from "react-ts-tradingview-widgets";
import "./Home.scss";

const styles = {
  parent: {
    fontSize: "0px",
    color: "red",
  },
  link: {
    textDecoration: "line-trough",
  },
  span: {
    color: "darkblue",
  },
};

export default class Home extends Component {
  state = {
    stockInfo: null,
  };

  componentDidMount() {
    if (!this.state.stockInfo) {
      apiCall
        .getHomeStockData()
        .then((res) => {
          this.setState({ stockInfo: res.data.quoteResponse.result });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    if (!this.state.stockInfo) {
      return <div className="loading"></div>;
    }

    return (
      <>
        <div className="hero">
          <h2>Welcome to TrackYourTrades</h2>
          <h3>
            The platform that makes it easy to build and track your stock
            portfolio
          </h3>
        </div>
        <div className="card-container">
          <div className="card-left">
            <MiniChart
              colorTheme="light"
              width={"100%"}
              height="300"
              symbol="QQQ"
              dateRange="1D"
              copyrightStyles={styles}
            ></MiniChart>
            <div className="card-left__price">
              <p>Price: {this.state.stockInfo[0].regularMarketPrice}</p>
              <p>% Change: {this.state.stockInfo[0].regularMarketChange}</p>
            </div>
            <div className="card-left__open">
              <p>Open: {this.state.stockInfo[0].regularMarketOpen}</p>
              <p>Close: {this.state.stockInfo[0].regularMarketPrice}</p>
            </div>
          </div>
          <div className="card-right">
            <MiniChart
              colorTheme="light"
              width={"100%"}
              height="300"
              symbol="SPY"
              dateRange="1D"
              copyrightStyles={styles}
            ></MiniChart>
            <div className="card-right__price">
              <p>Price: {this.state.stockInfo[1].regularMarketPrice}</p>
              <p>% Change: {this.state.stockInfo[1].regularMarketChange}</p>
            </div>
            <div className="card-right__open">
              <p>Open: {this.state.stockInfo[1].regularMarketOpen}</p>
              <p>Close: {this.state.stockInfo[1].regularMarketPrice}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
