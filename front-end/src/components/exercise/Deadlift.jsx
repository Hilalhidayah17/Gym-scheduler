import React, { useState } from "react";
import DeadliftGif from "../../assets/deadlift.gif";
import { DeadliftModal } from "../seeMore/DeadliftModal";

export const Deadlift = () => {
  const [showDeadliftModal, setShowDeadliftModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={DeadliftGif}
          alt="Deadlift"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Deadlift (4 x 1-5)</h2>
        <p className="text-gray-700">
          The deadlift is a compound exercise that involves lifting a weight
          from the ground to a standing position. It is often considered one of
          the best exercises for building overall strength and power, as it
          works multiple muscle groups throughout the body.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowDeadliftModal(true)}
        >
          See More
        </button>
      </div>
      {showDeadliftModal && (
        <DeadliftModal onClose={() => setShowDeadliftModal(false)} />
      )}
    </div>
  );
};
