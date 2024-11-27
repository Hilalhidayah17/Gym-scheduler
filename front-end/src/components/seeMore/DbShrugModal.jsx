import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const DbShrugModal = ({ onClose }) => {
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
            It’s important to start with a light weight that you can comfortably
            control with proper form. As you get comfortable with the exercise,
            you can gradually increase the weight
          </li>
          <li>
            Stand with your feet shoulder-width apart, and keep your back
            straight and your shoulders relaxed.
          </li>
          <li>
            Hold a dumbbell in each hand with your palms facing your body. Your
            arms should be straight down at your sides.
          </li>
          <li>
            Slowly lift your shoulders straight up towards your ears as high as
            possible, keeping your arms straight. Make sure to use your scapula
            and traps to lift the weight, not your biceps or your neck.
          </li>
          <li>
            Hold the top position for a moment, making sure to contract your
            traps fully.
          </li>
          <li>
            Slowly lower the dumbbells back down to the starting position,
            keeping your arms straight.
          </li>
        </ul>
      </div>
    </div>
  );
};
