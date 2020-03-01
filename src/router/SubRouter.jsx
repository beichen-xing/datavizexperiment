import React, { Component } from 'react';
import { Route,Switch } from "react-router-dom"

import Home from "../container/home"
import Bar from "../container/barchart"
import Pie from "../container/piechart"
import Submit from "../container/submit"
import Stack from "../container/stackedbar"

class SubRouter extends Component {
  
  render() {
    return (
      <Switch>
          <Route exact path="/" component={ Home }></Route>
          <Route path="/bar" component={ Bar }></Route>
          <Route path="/pie" component={ Pie }></Route>
          <Route path="/stack" component={ Stack }></Route>
          <Route path="/submit" component={ Submit }></Route>
      </Switch>
    );
  }
}

export default SubRouter;
