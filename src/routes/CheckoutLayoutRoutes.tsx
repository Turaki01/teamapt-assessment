import React from "react";
import {  Route, Switch } from "react-router";
import AppRoutes from "./routes.config";

const CheckoutLayoutRoutes = () => {
  const CheckoutLayoutRoutesList = AppRoutes.filter((route) => route.isCheckout);

  return (
    <div>
      <Switch>
        {CheckoutLayoutRoutesList.map((path) => (
          <Route
            key={path.path}
            exact={path.exact}
            path={path.path}
            component={path.component}
          />
        ))}
      </Switch>
    </div>
  );
};

export default CheckoutLayoutRoutes;
