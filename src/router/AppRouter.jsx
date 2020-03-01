import React, { Component } from 'react';
import { HashRouter } from "react-router-dom"

import SubRouter from "./SubRouter"

class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
            <SubRouter />
      </HashRouter>
    );
  }
}

export default AppRouter;
