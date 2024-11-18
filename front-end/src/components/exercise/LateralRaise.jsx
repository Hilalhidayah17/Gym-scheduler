import React, { useState } from "react";
import LateralRaiseGif from "../../assets/LateralRaiseGif.gif";
import { LateralRaiseModal } from "../seeMore/LateralRaiseModal";

export const LateralRaise = () => {
  const [showLateralRaiseModal, setShowLateralRaiseModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LateralRaiseGif}
          alt="Lateral Raises"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Lateral Raise (3 x 8-12)</h2>
        <p className="text-gray-700">
          Raising your arms to the side in a plane-like position is also called
          a shoulder abduction. Lateral raises muscles worked primarily include
          the lateral deltoid muscles. Because of the rotating movement, you'll
          use your front deltoids and upper traps a little bit, too
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLateralRaiseModal(true)}
        >
          See More
        </button>
      </div>
      {showLateralRaiseModal && (
        <LateralRaiseModal onClose={() => setShowLateralRaiseModal(false)} />
      )}
    </div>
  );
};
