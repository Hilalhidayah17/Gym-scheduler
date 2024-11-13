import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const DumblePress = ({ onClose }) => {
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
            Begin seated with your feet firmly on the floor. Hold the dumbbells
            at shoulder height with your palms facing forwards.
          </li>
          <li>
            Exhale and press the dumbbells over your head. Hold for a brief
            second at the top and then slowly lower to the starting position.
          </li>
          <li>
            <span className="font-bold">Pro Tips:</span> Be mindful of your
            lower back position. As you press overhead, your back will have the
            tendency to arch. Remember to start with lighter weights and
            gradually increase the load as you progress. Keep you core muscles
            engaged so that you maintain good posture.
          </li>
        </ul>
      </div>
    </div>
  );
};
