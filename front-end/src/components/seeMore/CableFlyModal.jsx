import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const CableFlyModal = ({ onClose }) => {
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
            Set the cable pulley machine so that the cables are at shoulder
            height with a single handle attachment on each.
          </li>
          <li>
            Facing away from the cable machine, grip each handle and take a step
            forward with one leg into a wide staggered stance. Hinge very
            slightly forward at the hips.
          </li>
          <li>
            Press the cable handles so they are in front of your chest with your
            arms extended, palms facing each other, then begin the reps by
            slowly allowing the handles to move towards the cable machine in an
            arc direction.
          </li>
          <li>
            Once the handles are in line with your chest, push through your arms
            and chest to bring the handles back to the start following the same
            arc movement.
          </li>
        </ul>
      </div>
    </div>
  );
};
