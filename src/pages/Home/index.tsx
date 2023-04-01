import Header from "components/Header";
import SingleClothCard from "components/SingleClothCard";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { Routes } from "routes/routes-constants";
import ListOfProducts from "utils/productListMock";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001
  });

  const navigateToAllProducts = () => {
    window.location.replace(Routes.Product);
  };
  return (
    <>
      <Header />
      <div className="px-4">
        <motion.div style={{ scaleX }} />
        <div className="flex justify-between">
          <h4 className="text-[#363644] text-[19px] font-bold">
            Best Sale Product
          </h4>

          <p className="text-[#429581]" onClick={navigateToAllProducts}>See more</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ListOfProducts.splice(0, 5).map((product, index) => (
            <SingleClothCard
              key={index}
              image={product.image}
              isLiked={product.isLiked}
              category={product.category}
              title={product.title}
              rating={product.rating}
              productCount={product.productCount}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
