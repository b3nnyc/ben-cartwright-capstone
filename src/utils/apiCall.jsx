import axios from "axios";

const quoteApi = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols="
const databaselocation = null

export default {
    getHomeStockData: () => axios.get(`${quoteApi}QQQ%SPY`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
    getStockData: (symbol) => axios.get(`${quoteApi}${symbol}`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
    getPortfolioList: () => axios.get(`${databaselocation}`),
    addPortfolioItem: (symbol, shares, avgPrx) => axios.post(`${databaselocation}`, {
        symbol: symbol,
        shares: shares, 
        avgPrx: avgPrx 
    })
}