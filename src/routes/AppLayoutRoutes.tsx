import React from "react";
import { Redirect, Route, Switch, useHistory } from "react-router";
import { Routes } from "./routes-constants";
import AppRoutes from "./routes.config";

const AppLayoutRoutes = () => {
  const AppLayoutRoutesList = AppRoutes.filter((route) => !route.isCheckout);
  const history = useHistory();
  const pathName = history.location.pathname || "";

  React.useEffect(() => {
    if (pathName === "/") {
      history.push(Routes.App);
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Switch>
        {AppLayoutRoutesList.map((path) => (
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
  );
};

export default AppLayoutRoutes;
