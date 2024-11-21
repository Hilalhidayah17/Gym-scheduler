import React, { useState } from "react";
import BentOverImg from "../../assets/Bent_Over_Row.gif";
import { BentOver } from "../../components/seeMore/BentOver.jsx";

export const BentOverRow = () => {
  const [showBentOverModal, setShowBentOverModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={BentOverImg}
          alt="Bent Over Row"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Bent Over Row (3 x 8-12)
        </h2>
        <p className="text-gray-700 text-sm">
          The Barbell Bent Over Row is a compound weightlifting exercise that
          targets the muscles of the upper back, lats, rhomboids, and traps.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
          onClick={() => setShowBentOverModal(true)}
        >
          See More
        </button>
        {showBentOverModal && (
          <BentOver onClose={() => setShowBentOverModal(false)} />
        )}
      </div>
    </div>
  );
};
