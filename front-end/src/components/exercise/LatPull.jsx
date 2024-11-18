import React, { useState } from "react";
import LatPullGif from "../../assets/MAG_LAT_PULL_DOWN.gif";
import { LatPullDown } from "../../components/seeMore/LatPullDown.jsx";

export const LatPull = () => {
  const [showLatPullDownModal, setShowLatPullDownModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LatPullGif}
          alt="Lat Pull Down"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Lat Pull Down (3 x 8-12)</h2>
        <p className="text-gray-700">
          The lat pulldown is a pulling exercise that primarily targets the
          latissimus dorsi muscles (commonly known as “lats”) in your back. It
          involves pulling a cable bar or handle down towards your chest while
          seated on a machine specifically designed for this exercise. The lat
          pulldown is typically performed with a wide grip, but can also be done
          with a narrow grip or underhand grip to target different muscle groups
          in the back and arms. It is a popular exercise for building upper body
          strength and improving posture.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLatPullDownModal(true)}
        >
          See More
        </button>
      </div>
      {showLatPullDownModal && (
        <LatPullDown onClose={() => setShowLatPullDownModal(false)} />
      )}
    </div>
  );
};
