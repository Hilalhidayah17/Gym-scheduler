import React, { useState } from "react";
import DumbleCurlGif from "../../assets/Dumble_Curl.gif";
import { DumbbellCurlModal } from "../seeMore/DumbbellCurlModal";

export const DumbleCurl = () => {
  const [showDumbbellCurlModal, setShowDumbbellCurlModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={DumbleCurlGif}
          alt="Dumble Curl"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Dumbbell Curl (3 x 8-12)
        </h2>
        <p className="text-gray-700 text-sm">
          Dumbbell curl is a basic strength training exercise to build muscle
          and strength in the arms. Specifically, the dumbbell curl works all
          the muscles in the front of the arm. The exercise can be performed in
          a variety of ways, including alternating arms, performing both arms at
          the same time, or using different grips or variations to target
          specific areas of the biceps. Also, by working each arm independently,
          you can identify and resolve any weakness or imbalance, ultimately
          promoting more balanced muscle development.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
          onClick={() => setShowDumbbellCurlModal(true)}
        >
          See More
        </button>
        {showDumbbellCurlModal && (
          <DumbbellCurlModal onClose={() => setShowDumbbellCurlModal(false)} />
        )}
      </div>
    </div>
  );
};
