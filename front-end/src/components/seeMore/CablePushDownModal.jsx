import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const CablePushDownModal = ({ onClose }) => {
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
            Stand in front of a cable machine with a high pulley attachment.
            Grab the straight bar or rope handle with an overhand grip (palms
            facing down).
          </li>
          <li>
            Position your feet shoulder-width apart, and slightly bend your
            knees for stability. Keep your back straight, and engage your core
            throughout the exercise.
          </li>
          <li>
            Start with your elbows bent at your sides and your forearms parallel
            to the ground, pointing down towards the floor. This is the starting
            position.
          </li>
          <li>
            Engage your triceps and push the bar or handle down towards your
            thighs, fully extending your arms.
          </li>
          <li>
            Hold the fully extended position for a brief moment, focusing on
            squeezing your triceps.
          </li>
          <li>
            Slowly and in a controlled manner, let the bar or handle return to
            the starting position, keeping tension on the triceps.
          </li>
        </ul>
      </div>
    </div>
  );
};
