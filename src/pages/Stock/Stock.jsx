import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Component } from "react";
import apiCall from "../../utils/apiCall";
import "./Stock.scss";

export default class Stock extends Component {
  state = {
    stock: this.props.match.params.id,
    stockInfo: null,
  };

  componentDidMount() {
    if (!this.state.stockInfo) {
      apiCall
        .getSingleStock(this.props.match.params.id)
        .then((res) => {
          console.log(res);
          this.setState({
            stockInfo: res.data.quoteResponse.result[0],
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <>
        <div className="background">
          <div className="container">
            <div className="chart-header">
              <h2 className="chart-header__title">
                {this.state.stock.toUpperCase()}
              </h2>
              <div className="chart-header__performance">
                <h3 className="chart-header__price">
                  $
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketPrice.toFixed(2)}
                </h3>
                <h3 className="chart-header__change">
                  Change: $
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketChange.toFixed(2)}{" "}
                </h3>
                <h3 className="chart-header__pct">
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketChangePercent.toFixed(
                        2
                      )}
                  %
                </h3>
              </div>
            </div>
            <div className="chart-container">
              <AdvancedRealTimeChart
                colorTheme="light"
                width={"95%"}
                height="750px"
                symbol={this.state.stock}
                hide_side_toolbar={true}
              />{" "}
            </div>
            <div className="chart-footer">
              <div className="chart-footer__left">
                <p className="chart-footer__open">
                  Today's Open:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketOpen}
                </p>
                <p className="chart-footer__hi">
                  52 Week High:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.fiftyTwoWeekHigh}
                </p>
                <p className="chart-footer__beta">
                  Volume:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketVolume.toLocaleString()}
                </p>
                <p className="chart-footer__beta">
                  Beta: {!this.state.stockInfo ? "" : this.state.stockInfo.beta}
                </p>
              </div>
              <div className="chart-footer__right">
                <p className="chart-footer__prevclose">
                  Last Close:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketPreviousClose}
                </p>
                <p className="chart-footer__lo">
                  52 Week Low:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.fiftyTwoWeekLow}
                </p>
                <p className="chart-footer__dividends">
                  Dividend per share:{" "}
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.dividendsPerShare}
                </p>
                <p className="chart-footer__cap">
                  Market Cap: $
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.marketCap.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
