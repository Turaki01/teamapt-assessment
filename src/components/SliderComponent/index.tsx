import React from "react";
import CarouselBgOne from "assets/bg/cloth-bg.jpeg";
import CarouselBgTwo from "assets/bg/cloth-bg-2.jpeg";
import SwipeAnimation from "components/Animation/SwipeAnimation";

interface SliderComponentProps {
  delay?: number;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ delay = 2500 }) => {
  const [selectIndex, setSelectedIndex] = React.useState(0);
  const carouselData: {
    bg: string;
    title?: string;
    crumb?: string;
    subText?: string;
    isCTA?: boolean;
    ctaText?: string;
  }[] = [
    {
      bg: CarouselBgOne,
      title: "80%  off",
      crumb: "# Fashion Day",
      subText: "Discover fashion that suits to your style",
      isCTA: true,
      ctaText: "Check this out"
    },
    {
      bg: CarouselBgTwo,
      title: "20%  off",
      crumb: "# Fashion Day",
      subText: "Discover fashion that suits to your style",
      isCTA: true,
      ctaText: "Check this out"
    },
    {
      bg: CarouselBgOne,
      title: "30%  off",
      crumb: "# Fashion Day",
      subText: "Discover fashion that suits to your style",
      isCTA: true,
      ctaText: "Check this out"
    }
  ];
  const timeoutRef = React.useRef<any>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSelectedIndex((prevIndex) =>
          prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };

    // eslint-disable-next-line
  }, [selectIndex]);

  return (
    <div className="h-[40vh]">
      <div
        className="h-full w-full bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${carouselData[selectIndex]?.bg})` }}
      >
        <div className="bg-[#e9ebea52 h-full w-full flex items-end relative ">
          {/* indicator */}
          <div className="flex absolute top-4 right-4">
            {carouselData.map((carousel, index: number) => (
              <SwipeAnimation key={index}>
                <div
                  className={`${
                    index === selectIndex ? "bg-[#1b1d2d]" : "bg-[#b2b8b6]"
                  } h-[3px] rounded-md  ml-1  ${
                    index === selectIndex ? "w-[15px]" : "w-[5px]"
                  }`}
                ></div>
              </SwipeAnimation>
            ))}
          </div>

          {/* carousel data */}
          <div className="px-5 pb-8 max-w-[220px]">
            <SwipeAnimation>
              <p className="text-[#252736] font-[500] text-[18px]">
                {carouselData[selectIndex]?.crumb}
              </p>

              <h3 className="text-[#161828] text-[24px] font-bold">
                {carouselData[selectIndex]?.title}
              </h3>

              <p className="text-[#80848b] text-sm">
                {carouselData[selectIndex]?.subText}
              </p>

              {carouselData[selectIndex]?.isCTA && (
                <button className="bg-[#2b2d40] px-3 rounded-md mt-3 py-3 text-[#fff]">
                  {carouselData[selectIndex]?.ctaText}
                </button>
              )}
            </SwipeAnimation>
          </div>

          {/* carousel data */}
        </div>
      </div>
    </div>
  );
};

export default SliderComponent;
