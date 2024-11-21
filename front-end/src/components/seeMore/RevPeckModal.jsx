import React from "react";
import { AiOutlineClose } from "react-icons/ai";
export const RevPeckModal = ({ onClose }) => {
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
            Adjust the seat so that the handles are about shoulder level, and
            make sure to maintain good neck and lower back posture.
          </li>
          <li>
            Exhale and pull your arms apart until your shoulders are parallel
            with your body. Hold for a brief second and then slowly return to
            the starting position.
          </li>
          <li>
            You don’t have to pull your arms as far back as possible during this
            exercise. Use a comfortable range of motion, and don’t force your
            shoulder too far past parallel with your body.
          </li>
        </ul>
      </div>
    </div>
  );
};
