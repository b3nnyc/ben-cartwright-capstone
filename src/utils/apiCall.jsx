import axios from "axios";

const quoteApi = "https://yfapi.net/v6/finance/quote?region=US&lang=en&symbols="
const databaselocation = null

export default {
    getStockData: (symbol) => axios.get(`${quoteApi}${symbol}`),
    getPortfolioList: () => axios.get(`${databaselocation}`),
    addPortfolioItem: (symbol, shares, avgPrx) => axios.post(`${databaselocation}`, {
        symbol: symbol,
        shares: shares, 
        avgPrx: avgPrx 
    })
}