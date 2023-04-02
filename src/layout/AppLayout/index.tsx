import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import AppLayoutRoutes from "routes/AppLayoutRoutes";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="mb-[100px]">
        <AppLayoutRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
