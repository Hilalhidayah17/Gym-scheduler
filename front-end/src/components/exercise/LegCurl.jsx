import React, { useState } from "react";
import LegCurlGif from "../../assets/LegCurlGif.gif";
import { LegCurlModal } from "../seeMore/LegCurlModal";

export const LegCurl = () => {
  const [showLegCurlModal, setShowLegCurlModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={LegCurlGif}
          alt="Leg Curl"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Leg Curl (3 x 10-12)</h2>
        <p className="text-gray-700">
          The leg curl is an isolation exercise that targets the muscles of the
          back of the thigh, specifically the hamstrings. It is an effective
          exercise for developing strength, size, and muscular endurance in the
          hamstrings.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowLegCurlModal(true)}
        >
          See More
        </button>
      </div>
      {showLegCurlModal && (
        <LegCurlModal onClose={() => setShowLegCurlModal(false)} />
      )}
    </div>
  );
};
