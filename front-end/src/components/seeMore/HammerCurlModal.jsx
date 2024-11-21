import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const HammerCurlModal = ({ onClose }) => {
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
            Stand or sit with good posture: Hold a weight in each hand with a
            neutral grip, palms facing each other. Your arms should be fully
            extended and hanging by your sides.
          </li>
          <li>
            Curl one arm at a time: Exhale and curl one weight towards your
            shoulder, while keeping the other weight extended and hanging by
            your side.
          </li>
          <li>
            Contract your biceps: At the top of the movement, squeeze your
            biceps to fully contract the muscles.
          </li>
          <li>
            Once you have completed a full rep with one arm, switch to the other
            arm and repeat the exercise.
          </li>
          <li>
            Inhale as you lower the weight and exhale as you curl the weight
            towards your shoulder.
          </li>
        </ul>
      </div>
    </div>
  );
};
