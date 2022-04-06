# TrackMyTrades

TrackMyTrades is a SPA that allows you to access stock information to make an informed investment decision. The platform also allows you to add your own stocks to a backend, which will render each stock and return the current price and performance of that position.

## Starting the application

Back end:

```bash
npm i
npx nodemon index.js
```

Front end:

```bash
npm i
npm start
```

## Usage

The application will start as soon as npm start is run. On the homepage, you will be greeted with a simple user interface. The nav bar contains a ticker tape, displaying the performance of some of the most popular stocks being traded. There’s a button to navigate to your portfolio, which I’ll showcase momentarily. The nav bar also contains a functional search feature, redirecting you to the page of whatever stock you wish to see.

If you choose to navigate to an individual stock page, youll find the symbol and daily performance, followed by the days chart. Underneath the chart, you will find some of the necessary information to help make an investment decision.

By clicking the portfolio button, you will be redirected to the portfolio page. To add your positions to the portfolio, just hit the “Add a stock” button. Input forms will display on the page, where you input the appropriate information (the symbol, your position direction, how many shares you own and your average price) and hit the green button to post the portfolio item to the backend. The application will then fetch the current price of that symbol and calculate your profit & loss on that position. To delete a portfolio item, you simply hit the red circle found on the right side of the screen.

I hope you enjoy the application as much as I enjoyed developing it.

## Future Plans

- User authentication
- Integrate SQL database to keep track of accounts and portfolios associated
- Watchlist
- "Dark mode" / ability to change theme of website on a user-by-user case
- Include better API - currently limited to 5 calls per second

## Links

[LinkedIn](www.linkedin.com/in/cartwright-ben)

[GitHub](https://choosealicense.com/licenses/mit/)
