import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const InclineBarblePress = ({ onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[700px max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
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
            Set up the incline bench at the desired angle. (30 to 45 degrees)
          </li>
          <li>
            Load the barbell with an appropriate weight for your fitness level
            and goals.
          </li>
          <li>
            Lie down on the bench with your feet firmly on the ground and your
            head resting on the bench.
          </li>
          <li>
            Grab the barbell with a grip slightly wider than shoulder-width
            apart.
          </li>
          <li>
            Unrack the barbell and bring it down to your upper chest, with your
            elbows flared out to the sides.
          </li>
          <li>
            Press the barbell back up to the starting position, exhaling as you
            push.
          </li>
        </ul>
      </div>
    </div>
  );
};
