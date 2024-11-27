import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const CableLateralModal = ({ onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px max-w-full h-fit bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex align-middle justify-center mt-5 text-2xl">
          <h2 className=" text-black">How To do:</h2>
        </div>
        <ul className="marker:text-[#A04747] list-disc pl-5 space-y-2 my-4">
          <li>
            Attach a handle to the bottom of a cable machine, and grasp the
            handle with an overhand position.
          </li>
          <li>
            Exhale and lift your arm out to the side to about 90 degrees. Hold
            for a brief second and then slowly return to the starting position.
          </li>
          <li>
            During this shoulder exercise posture and form are very important.
          </li>
        </ul>
      </div>
    </div>
  );
};
