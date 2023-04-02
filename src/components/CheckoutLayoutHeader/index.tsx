import React from "react";
import styles from "../Header/Header.module.scss";
import { FaChevronLeft } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { RiShareLine, RiShoppingBasketLine } from "react-icons/ri";

const CheckoutLayoutHeader = () => {
  const onBackFunction = () => {
    window.history.back();
  };

  return (
    <header className={styles.headerContainer}>
      <div className="flex py-3 items-center justify-between w-full">
        <FaChevronLeft color="#464757" onClick={onBackFunction} />

        <div className="flex items-center">
          <FcLike size={22} />
          <RiShareLine className="mx-3" size={22} />

          <div className="relative">
            <div className="absolute bg-[#e65986] w-[17px] h-[17px] text-[#fff] flex justify-center items-center text-[12px] rounded-sm right-0 top-0">
              10
            </div>
            <RiShoppingBasketLine color="#494d5b" size={29} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default CheckoutLayoutHeader;
