import React, { useState } from "react";
import OverHeadPress from "../../assets/overhead_press.gif";
import { DumblePress } from "../../components/seeMore/DumblePress.jsx";

export const DumbellShoulderPress = () => {
  const [showDumblePressModal, setShowDumblePressModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center ">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={OverHeadPress}
          alt="Over-Head-Press"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">
          Dumbbell Shoulder Press (3 x 8-12)
        </h2>
        <p className="text-gray-700">
          The dumbbell shoulder press, also known as the dumbbell overhead
          press, is an exercise that targets the muscles of the shoulders and
          upper body. It involves lifting a pair of dumbbells from shoulder
          level to an overhead position, using the shoulders and arms.
        </p>
        <p className="text-gray-700 mt-2">
          The dumbbell shoulder press targets the shoulder muscles, specifically
          the front deltoids. Dumbbells are easily accessible and can be used in
          various settings, including home workouts and gym environments.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowDumblePressModal(true)}
        >
          See More
        </button>
      </div>
      {showDumblePressModal && (
        <DumblePress onClose={() => setShowDumblePressModal(false)} />
      )}
    </div>
  );
};
