import React, { useState } from "react";
import DbShrugGif from "../../assets/DB_SHRUG.gif";
import { DbShrugModal } from "../seeMore/DbShrugModal.jsx";

export const DbShrug = () => {
  const [showDbShrugModal, setShowDbShrugModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={DbShrugGif}
          alt="Dumbbell Shrug "
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Dumbbell Shrug (3 x 8-12)</h2>
        <p className="text-gray-700">
          Dumbbell shrugs are an exercise that primarily targets the trapezius
          muscles, which are located on the upper back and neck area. Overall,
          dumbbell shrugs are a simple yet effective exercise that can provide
          many benefits for your overall fitness. Whether you’re a beginner or
          an experienced gym-goer, adding dumbbell shrugs to your workout
          routine can help you achieve your fitness goals.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowDbShrugModal(true)}
        >
          See More
        </button>
      </div>
      {showDbShrugModal && (
        <DbShrugModal onClose={() => setShowDbShrugModal(false)} />
      )}
    </div>
  );
};
