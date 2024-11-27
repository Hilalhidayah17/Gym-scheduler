import React, { useState } from "react";
import PullUpGif from "../../assets/PULL_UP.gif";
import { PullUpModal } from "../seeMore/PullUpModal";

export const PullUp = () => {
  const [showPullUpModal, setShowPullUpModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={PullUpGif}
          alt="Pull Up"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Pull Up (4 x 5-8)</h2>
        <p className="text-gray-700">
          Pull-up is a closed-chain an exercise that works almost all of the
          muscle groups on the upper body and provides both hypertrophy and
          strength at body weight.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowPullUpModal(true)}
        >
          See More
        </button>
      </div>
      {showPullUpModal && (
        <PullUpModal onClose={() => setShowPullUpModal(false)} />
      )}
    </div>
  );
};
