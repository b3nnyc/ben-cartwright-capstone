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
    if (this.props.search) {
      const searchTerm = this.props.search;
      this.props.resetSearch();
      this.props.history.push("/stock/" + searchTerm);
    }

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

  componentDidUpdate() {
    console.log(this.props.search);
    if (this.props.search) {
      const searchTerm = this.props.search;
      this.props.resetSearch();
      this.props.history.push("/stock/" + searchTerm);
    }
  }

  render() {
    if (!this.state.stockInfo || !this.state.trending || !this.state.news) {
      return <div className="loading"></div>;
    }

    return (
      <div className="background">
        <div className="container">
          <div className="hero">
            <h2 className="hero__header">Welcome to TrackMyTrades</h2>
            <h3 className="hero__subheader">
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
              <Link className="links" to={`/stock/QQQ`}>
                <div className="card-left__container">
                  <div className="card-left__left">
                    <p>Price: {this.state.stockInfo[0].regularMarketPrice}</p>
                    <p>Open: {this.state.stockInfo[0].regularMarketOpen}</p>
                  </div>
                  <div className="card-left__right">
                    <p>
                      Percent Change:{" "}
                      {this.state.stockInfo[0].regularMarketChange.toFixed(2)}%
                    </p>
                    <p>Close: {this.state.stockInfo[0].regularMarketPrice}</p>
                  </div>
                </div>
              </Link>
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
              <Link className="links" to={`/stock/SPY`}>
                <div className="card-right__container">
                  <div className="card-right__left">
                    <p>Price: {this.state.stockInfo[0].regularMarketPrice}</p>
                    <p>Open: {this.state.stockInfo[0].regularMarketOpen}</p>
                  </div>
                  <div className="card-right__right">
                    <p>
                      Percent Change:{" "}
                      {this.state.stockInfo[0].regularMarketChange.toFixed(2)}%
                    </p>
                    <p>Close: {this.state.stockInfo[0].regularMarketPrice}</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="trending-title">
            <h4 className="trending-title__header">Biggest Movers</h4>
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
                      <p
                        className="trending-lower__change"
                        style={{
                          color:
                            Math.sign(trend.regularMarketChangePercent) === -1
                              ? "red"
                              : "green",
                        }}
                      >
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
            <h4 className="news-title__header">Today's News</h4>
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
