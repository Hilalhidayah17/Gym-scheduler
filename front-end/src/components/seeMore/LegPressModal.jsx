import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const LegPressModal = ({ onClose }) => {
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
            Sit on the seat with your back against the backrest and your feet
            resting flat on the platform. Your knees should be bent at a
            90-degree angle.
          </li>
          <li>
            Add weight plates to the machine according to your desired intensity
            level. Start with a weight that you can comfortably handle and
            gradually increase it as you progress.
          </li>
          <li>
            Position your feet hip-width apart on the platform, with toes
            pointing forward or slightly outward. Ensure your feet are placed
            firmly and securely on the platform.
          </li>
          <li>
            Grip the handles or side supports of the machine for stability. Take
            a deep breath and brace your core muscles.
          </li>
          <li>
            Push against the platform with your feet and extend your legs,
            driving the platform away from your body. Keep your back against the
            seat throughout the movement and avoid locking your knees at the top
            of the movement.
          </li>
          <li>
            Slowly bend your knees and lower the weight back down, allowing your
            knees to reach a 90-degree angle or slightly beyond without letting
            the weight touch down completely.
          </li>
        </ul>
      </div>
    </div>
  );
};
