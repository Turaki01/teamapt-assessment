import React from "react";
import { FcLike } from "react-icons/fc";
import { AiFillStar } from "react-icons/ai";
import styles from "./SingleClothCard.module.scss";
import { IProductObject } from "interfaces/product";


const SingleClothCard: React.FC<IProductObject> = ({
    price,
    productCount,
    rating,
    title,
    category,
    image
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className="bg-cover h-[140px] bg-no-repeat relative rounded-tl-[10px] rounded-tr-[10px]" style={{ backgroundImage: `url(${image})` }}>
        <div className="absolute right-[8px] top-[8px]">
        <FcLike />
        </div>
      </div>
      <div className="p-3">
        <small className="text-[#bebec1]">{category}</small>

        <p className="leading-5">
          {title}
        </p>

        <div className="mt-2 flex justify-between items-center">
            <div className="flex items-center">
                <AiFillStar color="#f2a440" className="mr-2" />
                <p className="text-[13px] text-[#bfbfbe]">{rating} | {productCount}</p>
            </div>
            <p className="text-[#429581] text-[15px]">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleClothCard;
