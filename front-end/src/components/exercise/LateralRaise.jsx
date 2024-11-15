import React, { useState } from "react";
import LateralRaiseGif from "../../assets/LateralRaiseGif.gif";
import { LateralRaiseModal } from "../seeMore/LateralRaiseModal";

export const LateralRaise = () => {
  const [showLateralRaiseModal, setShowLateralRaiseModal] = useState(false);
  return (
    <div className="flex flex-nowrap items-center gap-6 flex-row-reverse mt-6">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LateralRaiseGif}
          alt="cable flies"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Cable Fly (3 x 8-12)</h2>
        <p className="text-gray-700">
          The cable fly is a chest fly variation which uses the cable machine to
          target the pectorals, with both the deltoids, triceps, and core
          engaged to help with stability. While the arms replicate the movement
          of the dumbbell fly, a standing position is adopted.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLateralRaiseModal(true)}
        >
          See More
        </button>
      </div>
      {showLateralRaiseModal && (
        <LateralRaiseModal onClose={() => setShowLateralRaiseModal(false)} />
      )}
    </div>
  );
};
