import React, { useState } from "react";
import HammerCurlGif from "../../assets/Hammer_Curl.gif";
import { HammerCurlModal } from "../seeMore/HammerCurlModal";

export const HammerCurl = () => {
  const [showHammerCurlModal, setShowHammerCurlModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={HammerCurlGif}
          alt="Hammer Curl"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Hammer Curl (3 x 8-12)
        </h2>
        <p className="text-gray-700 text-sm">
          Hammer Curl is a strength training exercise that primarily targets the
          biceps muscles in the upper arm. It is performed by holding a weight
          in each hand with a neutral grip, which means the palms of the hands
          are facing each other, and then curling the weights towards the
          shoulders. The neutral grip targets the brachioradialis muscle, which
          is located on the outer forearm and assists in flexing the elbow
          joint.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
          onClick={() => setShowHammerCurlModal(true)}
        >
          See More
        </button>
        {showHammerCurlModal && (
          <HammerCurlModal onClose={() => setShowHammerCurlModal(false)} />
        )}
      </div>
    </div>
  );
};
