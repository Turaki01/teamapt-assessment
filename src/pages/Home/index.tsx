import SingleClothCard from "components/SingleClothCard";
import React from "react";
import ListOfProducts from "utils/productListMock";

const Home = () => {
  return (
    <div className="px-4">
      <div className="flex justify-between">
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
    </div>
  );
};

export default Home;
