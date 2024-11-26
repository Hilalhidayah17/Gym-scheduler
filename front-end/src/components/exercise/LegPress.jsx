import React, { useState } from "react";
import LegPressGif from "../../assets/LEG_PRESS.gif";
import { LegPressModal } from "../seeMore/LegPressModal";

export const LegPress = () => {
  const [showLegPressModal, setShowLegPressModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LegPressGif}
          alt="Leg Press"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Leg Press (3 x 10)</h2>
        <p className="text-gray-700">
          The leg press, is a type of strength training exercise. It’s an
          effective move for strengthening your quadriceps, which are in the
          front of your upper legs. It is commonly performed using a leg press
          machine, which typically consists of a seat and a platform to which
          weight plates can be added.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLegPressModal(true)}
        >
          See More
        </button>
      </div>
      {showLegPressModal && (
        <LegPressModal onClose={() => setShowLegPressModal(false)} />
      )}
    </div>
  );
};
