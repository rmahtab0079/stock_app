import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from "./components/home";
import NotFound from "./components/notFound";
import Login from "./components/login";
import Portfolio from "./components/portfolio";


class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
  }
}

export default App;