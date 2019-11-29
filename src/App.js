import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introducion";
import Motivation from "./pages/Motivation";
import Future from "./pages/Future";
import Links from "./pages/Links";


export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/motivation" component={Motivation} />
          <Route exact path="/future" component={Future} />
          <Route exact path="/links" component={Links} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}