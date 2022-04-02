//Modules
import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//Pages
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Stock from "./pages/Stock/Stock";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route
          path="/stock/:id"
          render={(routerProps) => <Stock {...routerProps} />}
        />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
