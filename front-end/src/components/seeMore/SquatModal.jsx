import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function SquatModal({ onClose }) {
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
            Stand with your feet shoulder-width apart and position the barbell
            on your upper back, resting it on your trapezius muscles.
          </li>
          <li>
            Grasp the bar with your hands slightly wider than shoulder-width
            apart, and keep your elbows pointing down towards the ground.
          </li>
          <li>
            Take a deep breath, brace your core, and begin to squat down by
            pushing your hips back and bending your knees.
          </li>
          <li>
            Keep your chest up, your back straight, and your heels firmly
            planted on the ground.
          </li>
          <li>
            Lower your body until your thighs are parallel to the ground, or as
            low as you can comfortably go while maintaining proper form.
          </li>
          <li>
            Drive through your heels and push your body back up to the starting
            position, exhaling as you stand up.
          </li>
        </ul>
      </div>
    </div>
  );
}
