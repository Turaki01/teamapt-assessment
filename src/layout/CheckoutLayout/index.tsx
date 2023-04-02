import CheckoutLayoutFooter from "components/CheckoutLayoutFooter";
import CheckoutLayoutHeader from "components/CheckoutLayoutHeader";
import React from "react";
import CheckoutLayoutRoutes from "routes/CheckoutLayoutRoutes";

const CheckoutLayout = () => {
  return (
    <>
      <CheckoutLayoutHeader />
      <div className="mb-[120px]">
        <CheckoutLayoutRoutes />
      </div>
      <CheckoutLayoutFooter />
    </>
  );
};

export default CheckoutLayout;
