import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { Component } from "react";
import "./Stock.scss";

export default class Stock extends Component {
  state = {
    stock: null,
  };

  componentDidMount() {
    const urlID = this.props;
    console.log(urlID);
  }

  render() {
    return <p> hi </p>;
  }
  // if (!this.state.stock) {
  //   apiCall
  //     .getHomeStockData()
  //     .then((res) => {
  //       this.setState({ stockInfo: res.data.quoteResponse.result });
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
}
