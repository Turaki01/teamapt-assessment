/* eslint-disable react/react-in-jsx-scope */
import { Routes } from "./routes-constants";
import { RiHome4Fill, RiCoupon2Line, RiWallet3Line, RiSettingsLine } from "react-icons/ri";

export interface MenuListInterface {
  path: string;
  name: string;
  icon: React.ReactElement | null;
}

export const MenuList: MenuListInterface[] = [
  {
    path: Routes.App,
    name: "Home",
    icon: <RiHome4Fill color="#4eab97" size={27} />
  },
  {
    path: "",
    name: "Voucher",
    icon: <RiCoupon2Line color="#898e9a" size={27} />
  },
  {
    path: "",
    name: "Wallet",
    icon: <RiWallet3Line color="#898e9a" size={27} />
  },
  {
    path: "",
    name: "Settings",
    icon: <RiSettingsLine color="#898e9a" size={27} />
  }
];
