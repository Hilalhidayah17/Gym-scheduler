import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const StandCalfRaiseModal = ({ onClose }) => {
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
          <li>Adjust the shoulder pad corresponding to your height.</li>
          <li>
            Step underneath the pad and place the balls of your feet on the
            platform with your toes pointed straight ahead - your heels will
            naturally hang off.
          </li>
          <li>Extend the hips and knees in order to raise the shoulder pad.</li>
          <li>
            Lower the heels by dorsiflexing the ankles until the calves are
            fully stretched.
          </li>
          <li>Extend the ankles and exhale as you flex the calves.</li>
          <li>
            Keep the repetitions slow and controlled. Limit momentum and pause
            at the top to emphasize the contraction.
          </li>
        </ul>
      </div>
    </div>
  );
};
