import React, { useState } from "react";
import Navbar from "../components/navbar";
import { InclineBarblePress } from "../components/seeMore/InclineBarblePress.jsx";
import InclineChess from "../assets/incline_chess_press.gif";
import BentOverImg from "../assets/Bent_Over_Row.gif";
import { BentOver } from "../components/seeMore/BentOver.jsx";
import { DumbellShoulderPress } from "../components/exercise/DumbellShoulderPress.jsx";
import { LatPull } from "../components/exercise/LatPull.jsx";
import { CableFly } from "../components/exercise/CableFly.jsx";
import { LateralRaise } from "../components/exercise/LateralRaise.jsx";

export const DayTwo = () => {
  const [showInclinePressModal, setShowInclinePressModal] = useState(false);
  const [showBentOverModal, setShowBentOverModal] = useState(false);
  return (
    <div>
      <Navbar />
      <div className="p-4">
        <div className="w-full text-center">
          <h2>Day 1</h2>
        </div>
        <div className="flex flex-nowrap items-center gap-6">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={InclineChess}
              alt="Incline Chess"
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
        {/* Bent_Over */}
        <div className="flex flex-nowrap items-center gap-6 flex-row-reverse">
          <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
            <img
              src={BentOverImg}
              alt="Incline Chess"
              className="rounded-xl w-[150px] h-auto lg:w-[200px]"
            />
          </div>
          <div className="max-w-md">
            <h2 className="text-2xl font-bold mb-2">
              Bent Over Row (3 x 8-12)
            </h2>
            <p className="text-gray-700">
              The Barbell Bent Over Row is a compound weightlifting exercise
              that primarily targets the muscles of the upper back, including
              the lats (latissimus dorsi), rhomboids, and traps, as well as the
              biceps and rear deltoids. It also engages the core muscles for
              stability. This exercise is commonly used to build strength and
              muscle mass in the back and arms.
            </p>
            <button
              className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
              onClick={() => setShowBentOverModal(true)}
            >
              See More
            </button>
          </div>
          {showBentOverModal && (
            <BentOver onClose={() => setShowBentOverModal(false)} />
          )}
        </div>
        <div>
          <DumbellShoulderPress />
        </div>
        <div>
          <LatPull />
        </div>
        <div>
          <CableFly />
        </div>
        <div>
          <LateralRaise />
        </div>
      </div>
    </div>
  );
};
