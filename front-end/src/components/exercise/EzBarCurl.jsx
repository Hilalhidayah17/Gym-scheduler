import React, { useState } from "react";
import EzCurlGif from "../../assets/Ez_Bar_Curl.gif";
import { EzCurlModal } from "../seeMore/EzCurlModal";

export const EzBarCurl = () => {
  const [showEzCurlModal, setShowEzCurlModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="flex-shrink-0">
        <img
          src={EzCurlGif}
          alt="EzCurlGif"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Ez Bar Curl (3 x 8-12)
        </h2>
        <p className="text-gray-700 text-sm">
          The EZ Bar preacher curl, a variation of the preacher curl performed
          with a straight barbell, is an effective isolation exercise primarily
          targeting the biceps and forearms.
        </p>
        <button
          className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
          onClick={() => setShowEzCurlModal(true)}
        >
          See More
        </button>
        {showEzCurlModal && (
          <EzCurlModal onClose={() => setShowEzCurlModal(false)} />
        )}
      </div>
    </div>
  );
};
