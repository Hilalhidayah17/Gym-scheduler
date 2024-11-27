import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const RDLModal = ({ onClose }) => {
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
            Stand upright with good posture. Hold a heavy dumbbell in each hand.
            Place your arms in front of your thighs. Keep your chest lifted.
            Engage your core and glutes.
          </li>
          <li>
            Hinge at your hips. Push your glutes behind you, allowing for a
            slight bend in your knees. Keep your core tight and your chest up.
            Your back should stay straight throughout this movement.
          </li>
          <li>
            Lower the weights toward your shins. Straighten your arms and allow
            the weights to track down your legs. Pause briefly when the weights
            reach the midpoint of your shins.
          </li>
          <li>
            On an exhale, drive through your heels and hinge from your hips. Use
            your glutes and hamstrings to stand back up to the starting
            position. Avoid rounding your back.
          </li>
          <li>Pause at the top position. Squeeze your glutes.</li>
        </ul>
      </div>
    </div>
  );
};
