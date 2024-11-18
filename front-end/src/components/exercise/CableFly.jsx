import React, { useState } from "react";
import CableFlyGif from "../../assets/CableFlyGif.gif";
import { CableFlyModal } from "../seeMore/CableFlyModal";

export const CableFly = () => {
  const [showCableFlyModal, setShowCableFlyModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={CableFlyGif}
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
          onClick={() => setShowCableFlyModal(true)}
        >
          See More
        </button>
      </div>
      {showCableFlyModal && (
        <CableFlyModal onClose={() => setShowCableFlyModal(false)} />
      )}
    </div>
  );
};
