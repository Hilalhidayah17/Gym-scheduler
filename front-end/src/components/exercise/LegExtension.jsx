import React, { useState } from "react";
import LegExtensionGif from "../../assets/LegExtensionGif.gif";
import { LegExtensionModal } from "../seeMore/LegExtensionModal";

export const LegExtension = () => {
  const [showLegExtensionModal, setShowLegExtensionModal] = useState(false);
  return (
    <div className="flex flex-nowrap items-center gap-6  mt-6">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LegExtensionGif}
          alt="Leg Extension Machine"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Leg Extension Machine (3 x 8-12)
        </h2>
        <p className="text-gray-700">
          Leg extensions are a popular isolation exercise that primarily target
          the quadriceps muscles, which are located at the front of the thigh.
          Leg extension exercises typically involve the use of a leg extension
          machine found in most gyms.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLegExtensionModal(true)}
        >
          See More
        </button>
      </div>
      {showLegExtensionModal && (
        <LegExtensionModal onClose={() => setShowLegExtensionModal(false)} />
      )}
    </div>
  );
};
