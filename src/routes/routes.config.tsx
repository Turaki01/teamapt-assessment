import React from "react";
import { Routes } from "./routes-constants";

// Components import
const Home = React.lazy(() => import("pages/Home"));
const Product = React.lazy(() => import("pages/Product"));
const ProductDetails = React.lazy(() => import("pages/Product/ProductDetails"));

// Components import

type ReactFunctionalComponent = () => JSX.Element | null;

export interface RoutesInterface {
  path: string;
  exact: boolean;
  isPrivate: boolean;
  isCheckout: boolean;
  component:
    | React.LazyExoticComponent<ReactFunctionalComponent>
    | ReactFunctionalComponent;
}

const AppRoutes: RoutesInterface[] = [
  {
    path: Routes.App,
    exact: true,
    isPrivate: false,
    component: Home,
    isCheckout: false
  },
  {
    path: Routes.Product,
    exact: true,
    isPrivate: false,
    component: Product,
    isCheckout: false
  },
  {
    path: Routes.ProductDetails,
    exact: true,
    isPrivate: false,
    component: ProductDetails,
    isCheckout: true
  }
];

export default AppRoutes;
