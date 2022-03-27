import axios from "axios";

const proxyApi = "https://crossorigin.me/"
const quoteApi = `${proxyApi}https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=`
const portfolioDB = null
const watchlistDB = null

export default {
    getHomeStockData: () => axios.get(`${quoteApi}QQQ`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
    getStockData: (symbol) => axios.get(`${quoteApi}${symbol}`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
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