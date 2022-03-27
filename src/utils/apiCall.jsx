import axios from "axios";

const proxyApi = "https://crossorigin.me/"
const quoteApi = `${proxyApi}https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols=`
const databaselocation = null

export default {
    getHomeStockData: () => axios.get(`${quoteApi}QQQ`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
    getStockData: (symbol) => axios.get(`${quoteApi}${symbol}`, {headers: {'X-API-KEY':'TFFJcis3fU2ChGJNaKoe7ZXrFktxOmu7FhsQ1f60'}}),
    getPortfolioList: () => axios.get(`${databaselocation}`),
    addPortfolioItem: (symbol, shares, avgPrx) => axios.post(`${databaselocation}`, {
        symbol: symbol,
        shares: shares, 
        avgPrx: avgPrx 
    })
}