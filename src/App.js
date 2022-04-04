//Modules
import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Stock from "./pages/Stock/Stock";

export default class App extends React.Component {
  state = {
    search: "",
  };

  setSearch = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
    this.setState({
      search: e.target.search.value,
    });
    e.target.reset();
  };

  resetSearch = () => {
    this.setState({
      search: "",
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header setSearch={this.setSearch} />
        <Switch>
          <Route
            path="/stock/:id"
            render={(routerProps) => <Stock {...routerProps} />}
          />
          <Route path="/portfolio" component={Portfolio} />
          <Route
            path="/"
            render={(routerProps) => (
              <Home
                search={this.state.search}
                resetSearch={this.resetSearch}
                {...routerProps}
              />
            )}
          />
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    );
  }
}
