import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const DeadliftModal = ({ onClose }) => {
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
            Keep your back straight and your chest up throughout the lift.
          </li>
          <li>
            Keep the bar close to your body, and use your legs and glutes to
            power the lift.
          </li>
          <li>
            Brace your core muscles to stabilize your spine and protect your
            lower back.
          </li>
          <li>
            Avoid rounding your back or allowing your shoulders to hunch
            forward.
          </li>
          <li>
            Use a weight that allows you to perform the exercise with proper
            form and technique.
          </li>
        </ul>
      </div>
    </div>
  );
};
