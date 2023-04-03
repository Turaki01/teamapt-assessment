import React from "react";
import { BiCategory, BiDollarCircle } from "react-icons/bi";
import { BsAirplane, BsClipboardMinus, BsGlobe } from "react-icons/bs";


const CategoryComponent = () => {
  return (
    <div className="bg-[#fff] pt-5 pb-5 mb-10">
      <div className="grid grid-cols-5 gap-2">
        <div className="w-[50px] h-[50px]">
          <div className="w-[50px] h-[50px] bg-[#f6f6f6] flex justify-center items-center">
            <BiCategory size={22} />
          </div>

          <p className="text-[#a5a6a5] text-[11.5px] text-center mt-2">Category</p>
        </div>

        <div className="w-[50px] h-[50px]">
          <div className="w-[50px] h-[50px] bg-[#f6f6f6] flex justify-center items-center">
            <BsAirplane size={20} />
          </div>

          <p className="text-[#a5a6a5] text-[11.5px] text-center mt-2">Flight</p>
        </div>

        <div className="w-[50px] h-[50px]">
          <div className="w-[50px] h-[50px] bg-[#f6f6f6] flex justify-center items-center">
            <BsClipboardMinus size={20} />
          </div>

          <p className="text-[#a5a6a5] text-[11.5px] text-center mt-2">Bill</p>
        </div>

        <div className="w-[50px] h-[50px]">
          <div className="w-[50px] h-[50px] bg-[#f6f6f6] flex justify-center items-center">
            <BsGlobe size={20} />
          </div>

          <p className="text-[#a5a6a5] text-[11.5px] text-center mt-2">Data plan</p>
        </div>

        <div className="w-[50px] h-[50px]">
          <div className="w-[50px] h-[50px] bg-[#f6f6f6] flex justify-center items-center">
            <BiDollarCircle size={20} />
          </div>

          <p className="text-[#a5a6a5] text-[11.5px] text-center mt-2">Top Up</p>
        </div>
        
      </div>

      <div className="flex justify-center mt-10 items-center">
        <div className="bg-[#1b1d2d] h-[3px] rounded-md w-[20px]"></div>
        <div className="bg-[#b2b8b6] h-[3px] rounded-md w-[4px] mx-1"></div>
        <div className="bg-[#b2b8b6] h-[3px] rounded-md w-[4px]"></div>
      </div>
    </div>
  );
};

export default CategoryComponent;
