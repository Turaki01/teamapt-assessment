import FadeInAnimation from "components/Animation/FadeInContainer";
import SingleClothCard from "components/SingleClothCard";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import ListOfProducts from "utils/productListMock";

const Product = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <div className="px-4 mt-8">
        <motion.div style={{ scaleX }} />
        <FadeInAnimation yOffset={64} duration={1}>
        <div className="flex justify-between mb-3">
          <h4 className="text-[#363644] text-[19px] font-bold">
            Best Sale Product
          </h4>

          <p className="text-[#429581]">See more</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {ListOfProducts.map((product, index) => (
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
        </FadeInAnimation>
      </div>
    </>
  );
};

export default Product;
