import React, { useState } from "react";
import OneArmPDGif from "../../assets/Cable_One_Pull_Down.gif";
import { OneArmPullDownModal } from "../seeMore/OneArmPullDownModal";

export const OneArmPullDown = () => {
  const [showOneArmPDModal, setShowOneArmPDModal] = useState(false);
  return (
    <div className="flex flex-nowrap items-center gap-6 ">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={OneArmPDGif}
          alt="Cable One Arm Pull Down"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Cable One Arm Pull Down (3 x 6 - 10)
        </h2>
        <p className="text-gray-700">
          Cable one arm lat pulldown is one of the exercises that benefits to
          strengthen and enlarge your back. Cable one arm lat pulldown is a
          unilateral exercise. If one side of your body is stronger or larger
          than the other, you can use this exercise to correct these muscle
          imbalances that develop over time.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowOneArmPDModal(true)}
        >
          See More
        </button>
      </div>
      {showOneArmPDModal && (
        <OneArmPullDownModal onClose={() => setShowOneArmPDModal(false)} />
      )}
    </div>
  );
};
