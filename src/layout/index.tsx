import React from "react";
import AppRoutes from "routes/routes.config";
import { Redirect, Route, Switch } from "react-router";
import { Routes } from "routes/routes-constants";
import Footer from "components/Footer";

const RouteLayout = () => {
  const AppLayoutRoute = AppRoutes.filter((route) => !route.isPrivate);
  return (
    <div>
      <div className="app-container">
        <Switch>
          {AppLayoutRoute.map((path) => (
            <Route
              key={path.path}
              exact={path.exact}
              path={path.path}
              component={path.component}
            />
          ))}

          <Redirect to={Routes.App} />
        </Switch>
      </div>

      <Footer />
    </div>
  );
};

export default RouteLayout;
