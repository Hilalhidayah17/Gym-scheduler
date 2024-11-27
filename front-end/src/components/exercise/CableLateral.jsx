import React, { useState } from "react";
import CableLateralGif from "../../assets/CABLE_LATERAL.gif";
import { CableLateralModal } from "../seeMore/CableLateralModal";

export const CableLateral = () => {
  const [showCableLateralModal, setShowCableLateralModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={CableLateralGif}
          alt="Cable Lateral Raise"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Cable Lateral Raise (4 x 8-12)
        </h2>
        <p className="text-gray-700">
          The cable lateral raise is an effective exercise for targeting the
          lateral deltoids and improving shoulder strength and stability. It can
          be incorporated into your upper body or shoulder workout routine, or
          used as part of a full-body strength training program.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowCableLateralModal(true)}
        >
          See More
        </button>
      </div>
      {showCableLateralModal && (
        <CableLateralModal onClose={() => setShowCableLateralModal(false)} />
      )}
    </div>
  );
};
