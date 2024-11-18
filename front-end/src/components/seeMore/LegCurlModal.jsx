import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const LegCurlModal = ({ onClose }) => {
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
          <li>Stand with feet hip-width apart.</li>
          <li>
            Shift your weight onto one leg and bend the other at the knee,
            bringing that foot closer to the butt.
          </li>
          <li>Lower the foot and repeat on the other side.</li>
        </ul>
      </div>
    </div>
  );
};
