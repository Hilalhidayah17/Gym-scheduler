import React, { useState } from "react";
import RDLGif from "../../assets/RDL.gif";
import { RDLModal } from "../seeMore/RDLModal";

export const RDL = () => {
  const [showRDLModal, setShowRDLModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={RDLGif}
          alt="Romanian Dead Lift"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Romanian Deadlift (3 x 8-12)
        </h2>
        <p className="text-gray-700">
          Romanian Deadlift (RDL) is a weightlifting exercise that primarily
          targets the muscles in the posterior chain, including the lower back,
          hamstrings, and glutes. The exercise is similar to a conventional
          deadlift, but with a few key differences in form and technique.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowRDLModal(true)}
        >
          See More
        </button>
      </div>
      {showRDLModal && <RDLModal onClose={() => setShowRDLModal(false)} />}
    </div>
  );
};
