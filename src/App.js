import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Introduction from "./pages/Introducion";
import Motivation from "./pages/Motivation";
import Future from "./pages/Future";
import Links from "./pages/Links";
import Results from "./pages/Results";
import Conclusion from "./pages/Conclusion";
import References from "./pages/References";
import Learned from "./pages/Learned";
import Methodology from "./pages/Methodology";


export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/introduction" component={Introduction} /> 
          <Route exact path="/motivation" component={Motivation} />

          <Route exact path="/methodology" component={Methodology} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/conclusion" component={Conclusion} />
          <Route exact path="/learned" component={Learned} />
          <Route exact path="/future" component={Future} />
          <Route exact path="/references" component={References} />
          <Route exact path="/links" component={Links} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}