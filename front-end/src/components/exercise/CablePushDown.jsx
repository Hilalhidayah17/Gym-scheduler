import React, { useState } from "react";
import CablePushDownGif from "../../assets/CABLE_PUSH_DOWN.gif";
import { CablePushDownModal } from "../seeMore/CablePushDownModal";

export const CablePushDown = () => {
  const [showCablePushDownModal, setShowCablePushDownModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={CablePushDownGif}
          alt="Cable Push Down"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Cable Push Down (3 x 8-12)</h2>
        <p className="text-gray-700">
          The triceps push-down is a popular strength training exercise that
          targets the triceps muscles, which are located on the back of your
          upper arms. It’s a fundamental exercise for building triceps strength
          and definition and is commonly performed using a cable machine in most
          gyms.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowCablePushDownModal(true)}
        >
          See More
        </button>
      </div>
      {showCablePushDownModal && (
        <CablePushDownModal onClose={() => setShowCablePushDownModal(false)} />
      )}
    </div>
  );
};
