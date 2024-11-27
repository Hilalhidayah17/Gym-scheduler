import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const PullUpModal = ({ onClose }) => {
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
            Start with your hands on the bar approximately shoulder-width apart
            with your palms facing forward.
          </li>
          <li>
            With arms extended above you, stick your chest out and curve your
            back slightly. That is your starting position.
          </li>
          <li>
            Pull yourself up towards the bar using your back until the bar is at
            chest level while breathing out.
          </li>
          <li>
            Slowly lower yourself to the starting position while breathing in.
            That is one rep.
          </li>
        </ul>
      </div>
    </div>
  );
};
