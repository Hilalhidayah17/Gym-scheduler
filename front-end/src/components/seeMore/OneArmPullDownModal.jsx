import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const OneArmPullDownModal = ({ onClose }) => {
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
            Grip the handle with one hand, making sure your palm is facing down.
          </li>
          <li>
            Pull the handle down to your chest level by bending at the elbow and
            pulling your arm down and back, keeping the rest of your body
            stationary.
          </li>
          <li>
            Extend your arm back up in a controlled motion, finishing in a
            straight position.
          </li>
        </ul>
      </div>
    </div>
  );
};
