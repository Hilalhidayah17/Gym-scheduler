import React, { useState } from "react";
import DipsGif from "../../assets/Dips.gif";
import { ChestDips } from "../../components/seeMore/DipsModal.jsx";

export const Dips = () => {
  const [showDipsModal, setShowDipsModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={DipsGif}
          alt="Dips"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Dips (3 x Until Failure)</h2>
        <p className="text-gray-700">
          A dip is an upper-body strength exercise. Close grip dips primarily
          train the triceps, with major synergists being the anterior deltoid,
          the pectoralis muscles, and the rhomboid muscles of the back.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowDipsModal(true)}
        >
          See More
        </button>
      </div>
      {showDipsModal && <ChestDips onClose={() => setShowDipsModal(false)} />}
    </div>
  );
};
