import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const LegExtensionModal = ({ onClose }) => {
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
            Sit on the machine with your back against the backrest and your feet
            firmly placed against the footpad. Make sure your knees are aligned
            with the pivot point of the machine.
          </li>
          <li>
            Grasp the handles provided on the machine for stability and support
            throughout the exercise. Keep your upper body relaxed and maintain
            good posture.
          </li>
          <li>
            Exhale and contract your quadriceps to extend your legs. Straighten
            your knees and lift the weighted lever or roller by pushing your
            feet forward.
          </li>
          <li>
            Continue the movement until your legs are fully extended, but avoid
            locking your knees at the top of the movement.
          </li>
          <li>
            Pause briefly in the extended position, focusing on squeezing your
            quadriceps.
          </li>
          <li>
            Inhale and slowly lower the weight by bending your knees and
            returning to the starting position, controlling the descent.
          </li>
        </ul>
      </div>
    </div>
  );
};
