import axios from "axios";

const quoteApi = `https://yh-finance.p.rapidapi.com`
const homeQuotes = `/market/v2/get-quotes?region=US&symbols=qqq%2Cspy`
const singleQuote = `/market/v2/get-quotes?region=US&symbols=`
const trending = `/market/get-trending-tickers`
const recommendations = `/stock/v2/get-recommendations`
const apiKey = `194a67eae9mshafa1551f18bdb31p1e1bacjsnd6211d84a21e`
const apiHost = `yh-finance.p.rapidapi.com`
const portfolioDB = null
const watchlistDB = null

export default {
    getHomeStockData: () => axios.get(`${quoteApi}${homeQuotes}`, {headers: {'X-RapidAPI-Key':`${apiKey}`, 'X-RapidAPI-Host': `${apiHost}`, }}),
    getTrending: () => axios.get(`${quoteApi}${trending}`, {headers: {'X-RapidAPI-Key':`${apiKey}`, 'X-RapidAPI-Host': `${apiHost}`}}),
    getRecommended: (symbol) => axios.get(`${quoteApi}${recommendations}?symbol=${symbol}`, {headers: {'X-RapidAPI-Key':`${apiKey}`, 'X-RapidAPI-Host': `${apiHost}`}}),
    getSingleStock: (symbol) => axios.get(`${quoteApi}${singleQuote}${symbol}`, {headers: {'X-RapidAPI-Key':`${apiKey}`, 'X-RapidAPI-Host': `${apiHost}`}}),
    getPortfolioList: () => axios.get(`${portfolioDB}`),
    addPortfolioItem: (symbol, shares, avgPrx) => axios.post(`${portfolioDB}`, {
        symbol: symbol,
        shares: shares, 
        avgPrx: avgPrx 
    }),
    getWatchlist: () => axios.get(`${watchlistDB}`),
    addWatchlist: (symbol) => axios.post(`${watchlistDB}`, {
        symbol: symbol
    })
}

// /auto-complete for search bar
// /stock/v3/get-chart for chart info