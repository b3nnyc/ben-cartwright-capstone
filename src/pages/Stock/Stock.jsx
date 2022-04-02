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
          this.setState({
            stockInfo: res.data.quoteResponse.result,
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
            <div className="chart">
              <h2 className="chart__title">{this.state.stock}</h2>
              <h3 className="chart__price"></h3>
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
