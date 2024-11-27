import React, { useState } from "react";
import InclineChess from "../../assets/Incline_chess_press.gif";
import { InclineBarblePress } from "../../components/seeMore/InclineBarblePress.jsx";

export const InclineBenchPress = () => {
  const [showInclinePressModal, setShowInclinePressModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={InclineChess}
          alt="Incline Bench Press"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Incline Barbell Bench Press (3 x 8-12)
        </h2>
        <p className="text-gray-700 text-sm">
          The incline bench press is a compound exercise that primarily targets
          the upper chest muscles, but also engages the front shoulders and
          triceps.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
          onClick={() => setShowInclinePressModal(true)}
        >
          See More
        </button>
        {showInclinePressModal && (
          <InclineBarblePress onClose={() => setShowInclinePressModal(false)} />
        )}
      </div>
    </div>
  );
};
