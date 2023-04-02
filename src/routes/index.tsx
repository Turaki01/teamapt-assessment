import RouteLayout from "layout";
import React from "react";
import { useHistory } from "react-router-dom";

const AppRouter = () => {

  const history = useHistory();
  
  return (
    <div>
      <RouteLayout history={history} />
    </div>
  );
};

export default AppRouter;
