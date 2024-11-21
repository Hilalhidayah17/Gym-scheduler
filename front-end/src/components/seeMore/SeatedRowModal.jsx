import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const SeatedRowModal = ({ onClose }) => {
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
            Place your feet firmly on the footrest or platform provided by the
            cable machine.
          </li>
          <li>
            Keep your back straight and avoid slouching or rounding your
            shoulders forward. Engage your core muscles to help maintain good
            posture. This will help you maintain stability and prevent your
            lower back from rounding.
          </li>
          <li>
            Before starting the exercise, retract your shoulder blades and keep
            them in this position throughout the movement. This will help engage
            the muscles of the upper back and prevent excessive strain on the
            shoulders and neck.
          </li>
          <li>
            As you pull the cable handles towards you, keep your elbows flared
            out to the sides and squeeze your shoulder blades together at the
            end of the movement. This will help engage the muscles of the upper
            back and prevent excessive strain on the shoulders.
          </li>
          <li>
            Pause for a second at the top of the movement and then slowly
            release back to the starting position. Exhale as you pull the cable
            towards your body and inhale as you return to the starting position.
          </li>
          <li>
            Focus on using a slow and controlled movement to engage the target
            muscles effectively.
          </li>
        </ul>
      </div>
    </div>
  );
};
