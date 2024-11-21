import React, { useState } from "react";
import SeatedCableRowGif from "../../assets/SEATED_CABLE_ROW.gif";
import { SeatedRowModal } from "../seeMore/SeatedRowModal";

export const SeatedCableRow = () => {
  const [showSeatedCableRowModal, setShowSeatedCableRowModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={SeatedCableRowGif}
          alt="Seated Cable Row"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Seated Cable Row (3 x 8-12)</h2>
        <p className="text-gray-700">
          The seated cable row is a popular cable exercise that targets the
          upper back and lats. This exercise involves pulling a cable attachment
          towards your body while seated, using a cable machine. Whether you’re
          a beginner or an experienced lifter, this exercise can be a valuable
          addition to your training program.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowSeatedCableRowModal(true)}
        >
          See More
        </button>
      </div>
      {showSeatedCableRowModal && (
        <SeatedRowModal onClose={() => setShowSeatedCableRowModal(false)} />
      )}
    </div>
  );
};
