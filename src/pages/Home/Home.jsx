import { Component } from "react";
import apiCall from "../../utils/apiCall";
import { MiniChart } from "react-ts-tradingview-widgets";
import { Link } from "react-router-dom";
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
    trending: null,
    news: null,
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

    if (!this.state.trending) {
      apiCall
        .getTrending()
        .then((res) => {
          this.setState({ trending: res.data.finance.result[0].quotes });
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    if (!this.state.news) {
      apiCall
        .getNews()
        .then((res) => {
          this.setState({ news: res.data.data.contents[0].content });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  render() {
    if (!this.state.stockInfo || !this.state.trending || !this.state.news) {
      return <div className="loading"></div>;
    }

    console.log(this.state.news);

    return (
      <div className="background">
        <div className="container">
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
                <p>
                  Percent Change:{" "}
                  {this.state.stockInfo[0].regularMarketChange.toFixed(2)}%
                </p>
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
                <p>
                  Price: {this.state.stockInfo[1].regularMarketPrice.toFixed(2)}
                </p>
                <p>
                  Percent Change:{" "}
                  {this.state.stockInfo[1].regularMarketChange.toFixed(2)}%
                </p>
              </div>
              <div className="card-right__open">
                <p>Open: {this.state.stockInfo[1].regularMarketOpen}</p>
                <p>Close: {this.state.stockInfo[1].regularMarketPrice}</p>
              </div>
            </div>
          </div>
          <div className="trending-title">
            <h4>Biggest Movers</h4>
          </div>
          <div className="trending">
            {this.state.trending.map((trend) => {
              return (
                <Link className="links" to={`/stock/${trend.symbol}`}>
                  <div className="trending-container">
                    <div className="trending-upper">
                      <p className="trending-upper__symbol">{trend.symbol}</p>
                      <p className="trending-upper__price">
                        Current Price: {trend.regularMarketPrice.toFixed(2)}
                      </p>
                    </div>
                    <div className="trending-lower">
                      <p className="trending-lower__pct-change"></p>
                      <p className="trending-lower__change">
                        Change: $ {trend.regularMarketChange.toFixed(2)} /{" "}
                        {trend.regularMarketChangePercent.toFixed(2)}%
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="news-title">
            <h4>Today's News</h4>
          </div>
          <div className="news">
            <a className="links" href={this.state.news.canonicalUrl.url}>
              <div className="news-container">
                <div className="news-image">
                  <img
                    className="news-image__image"
                    src={
                      this.state.news.body.data.partnerData.cover.image
                        .originalUrl
                    }
                    alt="news thumbnail"
                  />
                </div>
                <div className="news-copy">
                  <div className="news-copy__top">
                    <h5 className="news-copy__title">
                      {this.state.news.title}
                    </h5>
                    <h6 className="news-copy__author">
                      {this.state.news.authors[0].author.displayName}
                    </h6>
                  </div>
                  <p className="news-copy__desc">{this.state.news.summary}</p>
                </div>
              </div>
            </a>{" "}
          </div>
        </div>
      </div>
    );
  }
}
