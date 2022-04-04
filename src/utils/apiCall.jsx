import axios from "axios";

const quoteApi = `https://yh-finance.p.rapidapi.com`;
const homeQuotes = `/market/v2/get-quotes?region=US&symbols=qqq%2Cspy`;
const singleQuote = `/market/v2/get-quotes?region=US&symbols=`;
const trending = `/market/get-trending-tickers`;
const chart = `/stock/v3/get-chart`;
const recommendations = `/stock/v2/get-recommendations`;
const news = `/news/v2/get-details?uuid=9803606d-a324-3864-83a8-2bd621e6ccbd&region=US`;
const apiKey = `194a67eae9mshafa1551f18bdb31p1e1bacjsnd6211d84a21e`;
const apiHost = `yh-finance.p.rapidapi.com`;
const uuid = `9803606d-a324-3864-83a8-2bd621e6ccbd`;
const portfolioDB = `http://localhost:8080`;

export default {
  getHomeStockData: () =>
    axios.get(`${quoteApi}${homeQuotes}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),

  getTrending: () =>
    axios.get(`${quoteApi}${trending}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),

  getRecommended: (symbol) =>
    axios.get(`${quoteApi}${recommendations}?symbol=${symbol}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),

  getSingleStock: (symbol) =>
    axios.get(`${quoteApi}${singleQuote}${symbol}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),

  getPortfolioList: () => axios.get(`${portfolioDB}`),

  // addPortfolioItem: (symbol, shares, avgPrx) =>
  //   axios.post(`${portfolioDB}`, {
  //     symbol: symbol,
  //     shares: shares,
  //     avgPrx: avgPrx,
  //   }),

  getChartInfo: (symbol) =>
    axios.get(`${quoteApi}${chart}${symbol}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),

  getNews: () =>
    axios.get(`${quoteApi}${news}`, {
      headers: {
        "X-RapidAPI-Key": `${apiKey}`,
        "X-RapidAPI-Host": `${apiHost}`,
      },
    }),
};

// getWatchlist: () => axios.get(`${watchlistDB}`),
// addWatchlist: (symbol) =>
//   axios.post(`${watchlistDB}`, {
//     symbol: symbol,
//   }),
