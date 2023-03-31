import { Routes } from "./routes-constants";

export interface MenuListInterface {
  path: string;
  name: string;
  icon: React.ReactElement | null;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.App,
    name: "Home",
    icon: null
  },
  {
    path: "",
    name: "Voucher",
    icon: null
  },
  {
    path: "",
    name: "Wallet",
    icon: null
  },
  {
    path: "",
    name: "Settings",
    icon: null
  }
];
