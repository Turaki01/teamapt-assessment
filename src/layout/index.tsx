import React from "react";
import AppLayout from "./AppLayout";
import { RouteChildrenProps } from "react-router-dom";
import CheckoutLayout from "./CheckoutLayout";

const RouteLayout = ({
  history
}: Required<Pick<RouteChildrenProps, "history">>) => {
  const pathName = history.location.pathname || "";
  return (
    <>{pathName.includes("details") ? <CheckoutLayout /> : <AppLayout />}</>
  );
};

export default RouteLayout;
