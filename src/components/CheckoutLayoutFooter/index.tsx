import React from "react";
import styles from "../Footer/Footer.module.scss";
import { RiShoppingBasketLine } from "react-icons/ri";

const CheckoutLayoutFooter = () => {
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
        <div>
          <p className="text-sm text-[#9c9da6] my-0 py-0">Total Price</p>
          <h4 className="text-[#4aaf96] font-[500] text-[22px] my-0 py-0 leading-7">
            $18.00
          </h4>
        </div>

        <div className="flex">
          <div className="w-[64px] h-[50px] bg-[#4aaf96] text-[16px] flex items-center justify-center rounded-tl-md  rounded-bl-md">
          <RiShoppingBasketLine color="#ffffff" size={21} className="mr-1"  />
            1
          </div>

          <div className="bg-[#2b2d40] h-[50px] w-[110px] text-[#fff] text-[16px] rounded-tr-md  rounded-br-md flex items-center justify-center">
            Buy Now
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CheckoutLayoutFooter;
