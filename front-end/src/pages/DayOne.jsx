import React, { useState } from "react";
import Navbar from "../components/navbar";
import Squat from "../assets/Squat.gif";
import InclineChess from "../assets/incline_chess_press.gif";
import OverHeadPress from "../assets/overhead_press.gif";
import LatPull from "../assets/MAG_LAT_PULL_DOWN.gif";
import Dips from "../assets/Dips.gif";
import SquatModal from "../components/seeMore/SquatModal.jsx";
import { InclineBarblePress } from "../components/seeMore/InclineBarblePress.jsx";
import { DumblePress } from "../components/seeMore/DumblePress.jsx";
import { LatPullDown } from "../components/seeMore/LatPullDown.jsx";
import { ChestDips } from "../components/seeMore/Dips.jsx";

export const DayOne = () => {
  const [showSquatModal, setShowSquatModal] = useState(false);
  const [showInclinePressModal, setShowInclinePressModal] = useState(false);
  const [showDumblePressModal, setShowDumblePressModal] = useState(false);
  const [showLatPullDownModal, setShowLatPullDownModal] = useState(false);
  const [showDipsModal, setShowDipsModal] = useState(false);

  return (
    <div className="h-[100vh] ">
      <Navbar />
      <div className="p-4">
        <div className="flex flex-nowrap items-center gap-6">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={Squat}
              alt="Squat"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              BARBELL SQUAT (3 x 8-12)
            </h2>
            <p className="text-gray-700">
              The barbell squat is a strength training exercise that targets the
              muscles of the lower body, particularly the quadriceps,
              hamstrings, and glutes. It is a compound exercise, meaning it
              works multiple muscle groups simultaneously. The exercise is
              performed using a barbell, which is a long, straight bar that is
              weighted with plates.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowSquatModal(true)}
            >
              See More
            </button>
          </div>
          {showSquatModal && (
            <SquatModal onClose={() => setShowSquatModal(false)} />
          )}
        </div>
        <div className="flex flex-nowrap items-center gap-6 flex-row-reverse">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={InclineChess}
              alt="Incline-Chess-Press"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              Incline Barbell Bench Press (3 x 8-12)
            </h2>
            <p className="text-gray-700">
              The incline bench press is a compound exercise that primarily
              targets the upper chest muscles, but also engages the front
              shoulders and triceps. The movement is typically performed on an
              incline bench raised at an angle of about 30 to 45 degrees.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowInclinePressModal(true)}
            >
              See More
            </button>
          </div>
          {showInclinePressModal && (
            <InclineBarblePress
              onClose={() => setShowInclinePressModal(false)}
            />
          )}
        </div>
        <div className="flex flex-nowrap items-center gap-6 ">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={OverHeadPress}
              alt="Over-Head-Press"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              Dumbbell Shoulder Press (3 x 8-12)
            </h2>
            <p className="text-gray-700">
              The dumbbell shoulder press, also known as the dumbbell overhead
              press, is an exercise that targets the muscles of the shoulders
              and upper body. It involves lifting a pair of dumbbells from
              shoulder level to an overhead position, using the shoulders and
              arms.
            </p>
            <p className="text-gray-700 mt-2">
              The dumbbell shoulder press targets the shoulder muscles,
              specifically the front deltoids. Dumbbells are easily accessible
              and can be used in various settings, including home workouts and
              gym environments.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowDumblePressModal(true)}
            >
              See More
            </button>
          </div>
          {showDumblePressModal && (
            <DumblePress onClose={() => setShowDumblePressModal(false)} />
          )}
        </div>
        <div className="flex flex-nowrap items-center gap-6 flex-row-reverse mt-6">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={LatPull}
              alt="Lat Pull Down"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              Lat Pull Down (3 x 8-12)
            </h2>
            <p className="text-gray-700">
              The lat pulldown is a pulling exercise that primarily targets the
              latissimus dorsi muscles (commonly known as “lats”) in your back.
              It involves pulling a cable bar or handle down towards your chest
              while seated on a machine specifically designed for this exercise.
              The lat pulldown is typically performed with a wide grip, but can
              also be done with a narrow grip or underhand grip to target
              different muscle groups in the back and arms. It is a popular
              exercise for building upper body strength and improving posture.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowLatPullDownModal(true)}
            >
              See More
            </button>
          </div>
          {showLatPullDownModal && (
            <LatPullDown onClose={() => setShowLatPullDownModal(false)} />
          )}
        </div>
        <div className="flex flex-nowrap items-center gap-6 ">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={Dips}
              alt="Dips"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              Dips (3 x Until Failure)
            </h2>
            <p className="text-gray-700">
              A dip is an upper-body strength exercise. Close grip dips
              primarily train the triceps, with major synergists being the
              anterior deltoid, the pectoralis muscles, and the rhomboid muscles
              of the back.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowDipsModal(true)}
            >
              See More
            </button>
          </div>
          {showDipsModal && (
            <ChestDips onClose={() => setShowDipsModal(false)} />
          )}
        </div>
      </div>
    </div>
  );
};
