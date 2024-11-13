import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const ChestDips = ({ onClose }) => {
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
            Stand facing a set of parallel bars with your hands shoulder-width
            apart and palms facing inward.
          </li>
          <li>
            Jump up and straighten your arms so that your body is fully
            extended. Your feet should be off the ground.
          </li>
          <li>
            Lower your body by bending your elbows and leaning forward slightly,
            keeping your elbows close to your sides.
          </li>
          <li>
            Continue lowering until your shoulders are slightly below your
            elbows or until you feel a stretch in your chest.
          </li>
          <li>
            Push yourself back up to the starting position by straightening your
            arms, exhaling as you do so.
          </li>
        </ul>
      </div>
    </div>
  );
};
