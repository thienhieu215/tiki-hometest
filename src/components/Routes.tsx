import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from '../pages/home/Home'
import Order from '../pages/order/Cart'
import PageNotFound from '../pages/404/PageNotFound';

const Routes = () => {

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/order" component={Order} />
      <Route component={PageNotFound} />
    </Switch>
  );

}

export default Routes;
