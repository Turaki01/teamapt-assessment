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
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <RiHome4Fill color="#4eab97" size={27} />
  },
  {
    path: "",
    name: "Voucher",
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <RiCoupon2Line color="#898e9a" size={27} />
  },
  {
    path: "",
    name: "Wallet",
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <RiWallet3Line color="#898e9a" size={27} />
  },
  {
    path: "",
    name: "Settings",
    // eslint-disable-next-line react/react-in-jsx-scope
    icon: <RiSettingsLine color="#898e9a" size={27} />
  }
];
