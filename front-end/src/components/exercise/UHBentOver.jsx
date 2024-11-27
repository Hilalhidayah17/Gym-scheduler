import React, { useState } from "react";
import UHBentOverGif from "../../assets/Underhand_Bent_Over.gif";

export const UHBentOver = () => {
  const [showUHBentOverModal, setShowUHBentOverModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={UHBentOverGif}
          alt="Underhand Bent Over Row"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Underhand Bent Over Row (4 x 8-12)
        </h2>
        <p className="text-gray-700">
          The Underhand Bent Over Row is a variation of the traditional Barbell
          Bent Over Row, where you change the grip on the barbell to an
          underhand grip (palms facing upward). This grip variation shifts the
          emphasis of the exercise, placing more emphasis on the biceps and the
          lower lats, while still engaging the upper back muscles.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowUHBentOverModal(true)}
        >
          See More
        </button>
      </div>
      {showUHBentOverModal && (
        <U onClose={() => setShowCableLateralModal(false)} />
      )}
    </div>
  );
};
