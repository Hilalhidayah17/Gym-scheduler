import React, { useState } from "react";
import BarbellBenchGif from "../../assets/Barbell_Bench.gif";
import { BarbellBenchModal } from "../seeMore/BarbellBenchModal";

export const BarbellBench = () => {
  const [showBarbellBenchModal, setShowBarbellBenchModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={BarbellBenchGif}
          alt="Barbell Bench Press"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Barbell Bench Press (4 x 5-8)
        </h2>
        <p className="text-gray-700">
          The bench press is a popular strength training exercise that primarily
          targets the chest muscles (pectoralis major and minor).
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowBarbellBenchModal(true)}
        >
          See More
        </button>
      </div>
      {showBarbellBenchModal && (
        <BarbellBenchModal onClose={() => setShowBarbellBenchModal(false)} />
      )}
    </div>
  );
};
