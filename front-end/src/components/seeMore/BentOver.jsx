import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const BentOver = ({ onClose }) => {
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
            Stand with your feet shoulder-width apart, toes pointing forward,
            and the barbell in front of you on the floor. You can choose to use
            an overhand grip (palms facing you) or an underhand grip (palms
            facing away) on the bar, depending on your preference and comfort.
          </li>
          <li>
            Hinge at your hips while keeping your back straight. Lower your
            torso until it is almost parallel to the floor. Keep your knees
            slightly bent throughout the movement.
          </li>
          <li>
            Reach down and grip the barbell with your hands slightly wider than
            shoulder-width apart. Your arms should be fully extended, and your
            grip should be firm.
          </li>
        </ul>
      </div>
    </div>
  );
};
