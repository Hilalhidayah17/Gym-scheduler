import React, { useState } from "react";
import SMPressGif from "../../assets/SM_PRESS.gif";
import { SMPressModal } from "../seeMore/SMPressModal";

export const SMPress = () => {
  const [showSMPressModal, setShowSMPressModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={SMPressGif}
          alt="Shoulder Press Machine"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Shoulder Press Machine (4 x 8-12)
        </h2>
        <p className="text-gray-700">
          The Shoulder Press Machine is a compound exercise that targets the
          muscles of the shoulders, triceps, and upper body. It involves
          pressing a barbell overhead while seated on a bench or chair.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowSMPressModal(true)}
        >
          See More
        </button>
      </div>
      {showSMPressModal && (
        <SMPressModal onClose={() => setShowSMPressModal(false)} />
      )}
    </div>
  );
};
