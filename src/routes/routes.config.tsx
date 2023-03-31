import React from "react";
import { Routes } from "./routes-constants";

// Components import
const Home = React.lazy(() => import("pages/Home"));

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
  { path: Routes.App, exact: true, isPrivate: false, component: Home }
];

export default AppRoutes;
