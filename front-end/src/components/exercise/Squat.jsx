import React, { useState } from "react";
import SquatGif from "../../assets/SquatGif.gif";
import SquatModal from "../../components/seeMore/SquatModal.jsx";

export const Squat = () => {
  const [showSquatModal, setShowSquatModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={SquatGif}
          alt="Squat"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">BARBELL SQUAT (3 x 8-12)</h2>
        <p className="text-gray-700">
          The barbell squat is a strength training exercise that targets the
          muscles of the lower body, particularly the quadriceps, hamstrings,
          and glutes. It is a compound exercise, meaning it works multiple
          muscle groups simultaneously. The exercise is performed using a
          barbell, which is a long, straight bar that is weighted with plates.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowSquatModal(true)}
        >
          See More
        </button>
      </div>
      {showSquatModal && (
        <SquatModal onClose={() => setShowSquatModal(false)} />
      )}
    </div>
  );
};
