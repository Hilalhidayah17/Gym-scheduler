import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export const BarbellBenchModal = ({ onClose }) => {
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
            The first step in executing a proper bench press is to set up your
            equipment and body position. Make sure your bench is in a stable
            position, and your feet are firmly planted on the ground. Your back
            should be flat against the bench, and your shoulder blades should be
            retracted and squeezed together.
          </li>
          <li>
            Your grip on the bar is an essential aspect of your bench press
            technique. You should grip the bar with your palms facing away from
            your body, and your thumbs wrapped around the bar. Your grip should
            be shoulder-width apart or slightly wider.
          </li>
          <li>
            Before you start lifting, engage your core by taking a deep breath
            and bracing your abdominal muscles. This will help stabilize your
            spine and prevent any arching or bending during the lift.
          </li>
          <li>
            When lowering the bar, focus on controlling the weight and keeping
            your elbows tucked in at a 45-degree angle. This will help prevent
            shoulder injuries and improve your pressing power.
          </li>
          <li>
            When pressing the bar back up, focus on pushing with explosive force
            and driving your feet into the ground. This will help activate your
            legs and provide a stable base of support.
          </li>
          <li>
            Throughout the lift, make sure to keep your shoulders down and away
            from your ears. This will help prevent any undue stress on your
            shoulders and keep the focus on your chest and triceps.
          </li>
          <li>
            Proper breathing technique is crucial when performing the bench
            press. Take a deep breath before lowering the bar and exhale
            forcefully as you press it back up.
          </li>
          <li>
            Finally, make sure to maintain proper elbow position throughout the
            lift. Your elbows should be tucked in close to your body and not
            flared out to the sides. This will help prevent shoulder injuries
            and maximize your pressing power.
          </li>
        </ul>
      </div>
    </div>
  );
};
