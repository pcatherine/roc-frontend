import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introducion";


export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          
          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}