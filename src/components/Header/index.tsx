import React from "react";
import styles from "./Header.module.scss";
import SearchContainer from "components/SearchContainer";
import { RiMessage3Line, RiShoppingBasketLine } from "react-icons/ri";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <SearchContainer />

      <div className="flex">
        <div className="mr-3 relative">
          <div className="absolute bg-[#e65986] w-[17px] h-[17px] text-[#fff] flex justify-center items-center text-[12px] rounded-sm right-0 top-0">10</div>
          <RiShoppingBasketLine color="#494d5b" size={29}  />
        </div>

        <div className="mr-3 relative">
          <div className="absolute bg-[#e65986] w-[17px] h-[17px] text-[#fff] flex justify-center items-center text-[12px] rounded-sm right-0 top-0">9+</div>
          <RiMessage3Line color="#494d5b" size={29}  />
        </div>
      </div>
    </header>
  );
};

export default Header;
