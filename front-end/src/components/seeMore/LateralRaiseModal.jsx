import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const LateralRaiseModal = ({ onClose }) => {
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
            Stand tall with a dumbbell in each hand. Arms are at your sides,
            palms facing in. Position your feet roughly hip-distance apart.
            Check your posture—roll your shoulders back, engage your core, and
            look straight ahead.
          </li>
          <li>
            Raise your arms simultaneously just a couple of inches out to each
            side and pause. This momentary pause should help ensure you
            disengage your trapezius muscle from the movement, targeting the
            deltoids as intended.
          </li>
          <li>
            Lift the dumbbells up and out to each side, keeping your arms almost
            completely straight, stopping when your elbows reach shoulder height
            and your body forms a "T" shape. Breathe in as you lift.
          </li>
          <li>Pause and hold for a second at the top of the movement.</li>
          <li>
            Lower the weights slowly (take about twice as long to lower the
            weights as you took to lift them), bringing your arms back to your
            sides. Exhale as you lower the dumbbells.
          </li>
        </ul>
      </div>
    </div>
  );
};
