import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const DumbbellCurlModal = ({ onClose }) => {
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
            Select a weight that you can comfortably lift for the desired number
            of reps. It’s better to start with a lighter weight and work your
            way up, rather than using a weight that’s too heavy and sacrificing
            form.
          </li>
          <li>
            Stand up straight with your feet shoulder-width apart and your
            shoulders back. This will help to maintain proper alignment and
            engage your core.
          </li>
          <li>
            Keep your elbows close to your sides throughout the movement. This
            will help to isolate the biceps and prevent swinging.
          </li>
          <li>
            Lower the weight back down in a controlled manner, making sure to
            keep your elbow close to your side. Avoid letting the weight drop
            quickly, as this can put unnecessary strain on the joints.
          </li>
          <li>
            Once you have completed a full rep with one arm, switch to the other
            arm and repeat the exercise.
          </li>
          <li>
            Inhale as you lower the weight and exhale as you curl the weight
            towards your shoulder.
          </li>
        </ul>
      </div>
    </div>
  );
};
