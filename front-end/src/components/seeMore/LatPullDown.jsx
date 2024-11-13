import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const LatPullDown = ({ onClose }) => {
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
          <li>Start by attaching a wide handle bar to the cable.</li>
          <li>
            Sit on the lat pulldown machine with your feet flat on the ground
            and your knees firmly pressed against the pad. Your thighs should be
            parallel to the ground.
          </li>
          <li>
            Grab the bar with both hands, making sure your palms are facing away
            from you and your grip is wider than shoulder-width apart.
          </li>
          <li>
            While keeping your back straight and your chest up, pull the bar
            down towards your chest by contracting your back muscles. Your
            elbows should point downwards and stay close to your body.
          </li>
          <li>
            Pause for a second when the bar reaches your chest, and then slowly
            release it back up to the starting position, extending your arms
            fully.
          </li>
        </ul>
      </div>
    </div>
  );
};
