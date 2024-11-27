import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const SMPressModal = ({ onClose }) => {
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
            Begin sitting down with your feet firmly on the ground. Hold the bar
            at shoulder level with your palms facing forward.
          </li>
          <li>
            Exhale and press the bar over your head. Hold for a short second at
            the top and then slowly lower back to the starting position. Focus
            on feeling the burn in your shoulders throughout the movement. This
            helps ensure you’re engaging the target muscles effectively
          </li>
        </ul>
      </div>
    </div>
  );
};
