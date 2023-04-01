import React from "react";
import { Routes } from "./routes-constants";

// Components import
const Home = React.lazy(() => import("pages/Home"));
const Product = React.lazy(() => import("pages/Product"));

// Components import

type ReactFunctionalComponent = () => JSX.Element | null;

export interface RoutesInterface {
  path: string;
  exact: boolean;
  isPrivate: boolean;
  component:
    | React.LazyExoticComponent<ReactFunctionalComponent>
    | ReactFunctionalComponent;
}

const AppRoutes: RoutesInterface[] = [
  { path: Routes.App, exact: true, isPrivate: false, component: Home },
  { path: Routes.Product, exact: true, isPrivate: false, component: Product },
];

export default AppRoutes;
