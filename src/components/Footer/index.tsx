import React from "react";
import { MenuList } from "routes/MenuList";
import styles from "./Footer.module.scss";

const Footer = () => {
  const onMenuNavigation = (path: string) => {
    window.location.replace(path);
  };

  return (
    <footer
      className={`bg-[#fff]
    text-3xl text-white text-center
    fixed
    inset-x-0
    bottom-0
    h-[85px] ${styles.footerContainer}`}
    >
      <div className="flex justify-between items-center px-6 h-full">
        {MenuList.map((menu, index: number) => (
          <div key={menu.name + index} onClick={() => onMenuNavigation(menu.path || "")} className="flex flex-col items-center">
            {menu.icon}
            <p className="text-[13px] text-[#6a6e77]">{menu.name}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
