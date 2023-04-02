// component build based on the usecase of the design. this can be expanding to accomodate title as dynamic fields

import React from "react";

interface TabCompomentProps {
  children?: React.ReactNode;
}

const TabCompoment: React.FC<TabCompomentProps> = ({
  children
}) => {
  return (
    <div>
      <div>
        {/* title */}
        <div className="flex text-[#90929b] border-b-solid border-b-[1px] border-b-[#ebeced]">
          <p className="mr-6 text-[#298e78] font-[500] border-b-solid border-b-2 border-b-[#298e78] cursor-pointer pb-2">
            About Item
          </p>
          <p className="cursor-pointer pb-2">Reviews</p>
        </div>

        {/* component */}
        <div className="mt-4">
          { children }
        </div>
      </div>
    </div>
  );
};

export default TabCompoment;
