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
    console.log(this.state.stockInfo);

    return (
      <>
        <div className="background">
          <div className="container">
            <div className="chart-header">
              <h2 className="chart-header__title">{this.state.stock}</h2>
              <div className="chart-header__change">
                <h3 className="chart-header__price">
                  $
                  {!this.state.stockInfo
                    ? ""
                    : this.state.stockInfo.regularMarketPrice}
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
          </div>
        </div>
      </>
    );
  }
}
