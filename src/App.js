import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introducion";
import Motivation from "./pages/Motivation";


export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Route exact path="/motivation" component={Motivation} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}