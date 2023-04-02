import FadeInAnimation from "components/Animation/FadeInContainer";
import TabCompoment from "components/Tab";
import { motion, useScroll, useSpring } from "framer-motion";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { RiGovernmentFill, RiGovernmentLine } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";
import { ProductDetailsView } from "utils/productListMock";

const ProductDetails = () => {
  const { scrollYProgress } = useScroll();
  const ProductImages: string[] = ProductDetailsView;
  const [selectedImage, setSelectedImage] = React.useState<string>(
    ProductImages[0]
  );
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <div>
      <motion.div style={{ scaleX }} />

      <FadeInAnimation yOffset={64} duration={1}>
        <div className="px-5">
          <div className="bg-[#f2f2f2] my-8 rounded-md p-3 h-[50vh] relative">
            <div className="absolute left-5">
              {ProductImages.map((product, index: number) => (
                <div
                  key={index}
                  className="w-[50px] h-[50px] rounded-md mb-3"
                  onClick={() => setSelectedImage(product)}
                >
                  <img src={product} alt="Selected Product Image" className="object-contain" />
                </div>
              ))}
            </div>

            <img
              src={selectedImage}
              alt="Product Image"
              className="w-[150px] h-[280px] mx-auto flex object-contain"
            />
          </div>
          <p className="text-[#b3b4b8] flex items-center">
            <RiGovernmentLine className="mr-2" /> tokobaju.id
          </p>
          <h4 className="text-[22px] mt-3 font-bold leading-6">
            Essential Men&#8217;s short-sleeved crewneck T-shirt
          </h4>
          <div className="mt-4">
            <div className="text-[#91959d] flex items-center">
              <div className="flex items-center">
                <AiFillStar color="#f2a440" className="mr-2" />
                <p>4.9 Ratings</p>
              </div>

              <span className="mx-3">.</span>

              <span>2.3k+ Reviews</span>

              <span className="mx-3">.</span>

              <span>2.9k+ sold</span>
            </div>
          </div>
          <div className="mt-7">
            <TabCompoment>
              <div className="flex justify-between text-[#8c8e98] mb-2">
                <p>
                  Brand:{" "}
                  <span className="text-[#2c2e3d] font-[500]">ChArmkpR</span>
                </p>
                <p className="mr-[4rem]">
                  Color:{" "}
                  <span className="text-[#2c2e3d] font-[500]">Aprikot</span>
                </p>
              </div>
              <div className="flex justify-between text-[#8c8e98] mb-2">
                <p>
                  Brand:{" "}
                  <span className="text-[#2c2e3d] font-[500]">ChArmkpR</span>
                </p>
                <p className="mr-[4rem]">
                  Color:{" "}
                  <span className="text-[#2c2e3d] font-[500]">Aprikot</span>
                </p>
              </div>
              <div className="flex justify-between text-[#8c8e98] mb-2">
                <p>
                  Brand:{" "}
                  <span className="text-[#2c2e3d] font-[500]">ChArmkpR</span>
                </p>
                <p className="mr-[4rem]">
                  Color:{" "}
                  <span className="text-[#2c2e3d] font-[500]">Aprikot</span>
                </p>
              </div>
              <div className="flex justify-between text-[#8c8e98]">
                <p>
                  Brand:{" "}
                  <span className="text-[#2c2e3d] font-[500]">ChArmkpR</span>
                </p>
                <p className="mr-[4rem]">
                  Color:{" "}
                  <span className="text-[#2c2e3d] font-[500]">Aprikot</span>
                </p>
              </div>
            </TabCompoment>
          </div>

          <hr className="my-8" />

          <div>
            <p className="font-bold mb-3">Description</p>

            <ul className="list-disc px-5 text-[#8c8e98]">
              <li>
                Long sleeve demin shirt in classic fit featuring button-down
                color
              </li>
              <li>Patch pocket on left chest</li>
              <li>Durable combination cotton fabric</li>
              <li>
                Go to classic button diwn shirt for all special occassions
              </li>
            </ul>

            <p className="mt-5 text-[#8c8e98]">
              Chat us if there is anything you need to ask about the product
            </p>

            <p className="text-[#429581] flex items-center my-5">
              See less <FaChevronUp color="#8c8e98" className="ml-3" />
            </p>
          </div>

          <hr className="my-8" />

          <div>
            <p className="font-bold mb-3">Shipping Information: </p>

            <div className="flex mb-2">
              <p className="text-[#8c8e98] mr-4">Delivery</p>
              <p>Shipping from Jakarta, Indonesia</p>
            </div>
            <div className="flex mb-2">
              <p className="text-[#8c8e98] mr-4">Shipping</p>
              <p>FREE International Shipping</p>
            </div>
            <div className="flex">
              <p className="text-[#8c8e98] mr-4">Arrive</p>
              <p>Estimated arrival on 25 - 27 Oct 2022</p>
            </div>
          </div>

          <hr className="my-8" />

          <div className="mb-5">
            <p className="font-bold mb-3">Seller Information: </p>

            <div className="flex mt-4">
              <div className="bg-[#e3e3e3] h-[80px] w-[80px] rounded-full text-[13px] flex items-center text-center justify-center">
                Thrifting Shop
              </div>

              <div className="ml-5 pt-1">
                <h4 className="font-bold">Thrifting_Store</h4>

                <p className="text-[#8c8e98] text-sm">
                  Active 5 min ago <span className="px-1">|</span> 96&#37;
                  positive feedback
                </p>

                <button className="flex items-center mt-4 border-solid border-[1px] border-[#298e78] px-5 py-2 rounded-md text-[#298e78] text-[14px]">
                  {" "}
                  <RiGovernmentFill size={19} className="mr-2" /> Visit Store
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeInAnimation>
    </div>
  );
};

export default ProductDetails;
