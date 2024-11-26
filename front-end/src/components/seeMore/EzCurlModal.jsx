import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const EzCurlModal = ({ onClose }) => {
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
            Adjust the height of the preacher bench so that the upper arms rest
            comfortably on the angled pad. Ensure that your chest is in contact
            with the pad
          </li>
          <li>
            Select a suitable weight on the EZ-bar that challenges your biceps
            but allows you to maintain proper form.
          </li>
          <li>
            Grasp the EZ-bar with an underhand grip (palms facing up) with your
            hands slightly closer than shoulder-width apart.
          </li>
          <li>
            Position your arms on the angled pad, with your upper arms
            perpendicular to the ground and your elbows slightly flexed.
          </li>
          <li>
            Keeping your upper arms stationary, exhale and curl the bar towards
            your chest, focusing on contracting your biceps. Hold the peak
            contraction for a second.
          </li>
          <li>
            Inhale and slowly lower the bar back to the starting position,
            maintaining control and tension on your biceps.
          </li>
        </ul>
      </div>
    </div>
  );
};
