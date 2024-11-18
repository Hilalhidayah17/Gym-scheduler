import React, { useState } from "react";
import StandCalfRaiseGif from "../../assets/StandCalfRaiseGif.gif";
import { StandCalfRaiseModal } from "../seeMore/StandCalfRaiseModal";

export const StandinCalfRaise = () => {
  const [showStandCalfRaiseModal, setShowStandCalfRaiseModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={StandCalfRaiseGif}
          alt="Standing Calf Raise"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Standing Calf Raise (4 x 8-12)
        </h2>
        <p className="text-gray-700">
          The standing machine calf raise is an excellent exercise to use if you
          are interested in isolating the calves. In particular, the standing
          machine calf raise targets the gastrocnemius muscle. The gastrocnemius
          is better known as the “show” muscle of the calf.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowStandCalfRaiseModal(true)}
        >
          See More
        </button>
      </div>
      {showStandCalfRaiseModal && (
        <StandCalfRaiseModal
          onClose={() => setShowStandCalfRaiseModal(false)}
        />
      )}
    </div>
  );
  StandCalfRaise;
};
