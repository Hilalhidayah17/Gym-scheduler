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
import { Squat } from "../components/exercise/Squat.jsx";
import { LegCurl } from "../components/exercise/LegCurl.jsx";
import { LegExtension } from "../components/exercise/LegExtension.jsx";
import { StandinCalfRaise } from "../components/exercise/StandinCalfRaise.jsx";

export const DayTwo = () => {
  const [showInclinePressModal, setShowInclinePressModal] = useState(false);
  const [showBentOverModal, setShowBentOverModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-4">
        {/* Day 1 Section */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 1</h2>
        </div>

        {/* Exercise Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Incline Barbell Bench Press */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
            <div className="flex-shrink-0">
              <img
                src={InclineChess}
                alt="Incline Bench Press"
                className="rounded-xl w-[150px] h-auto lg:w-[200px]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Incline Barbell Bench Press (3 x 8-12)
              </h2>
              <p className="text-gray-700 text-sm">
                The incline bench press is a compound exercise that primarily
                targets the upper chest muscles, but also engages the front
                shoulders and triceps.
              </p>
              <button
                className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
                onClick={() => setShowInclinePressModal(true)}
              >
                See More
              </button>
              {showInclinePressModal && (
                <InclineBarblePress
                  onClose={() => setShowInclinePressModal(false)}
                />
              )}
            </div>
          </div>

          {/* Bent Over Row */}
          <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
            <div className="flex-shrink-0">
              <img
                src={BentOverImg}
                alt="Bent Over Row"
                className="rounded-xl w-[150px] h-auto lg:w-[200px]"
              />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Bent Over Row (3 x 8-12)
              </h2>
              <p className="text-gray-700 text-sm">
                The Barbell Bent Over Row is a compound weightlifting exercise
                that targets the muscles of the upper back, lats, rhomboids, and
                traps.
              </p>
              <button
                className="mt-4 py-2 px-4 bg-[#A04747] text-white font-medium rounded-lg hover:bg-[#8e3d3d] transition"
                onClick={() => setShowBentOverModal(true)}
              >
                See More
              </button>
              {showBentOverModal && (
                <BentOver onClose={() => setShowBentOverModal(false)} />
              )}
            </div>
          </div>
        </div>

        {/* Additional Exercises for Day 1 */}
        <div className="grid gap-6 lg:grid-cols-2 mt-6">
          <DumbellShoulderPress />
          <LatPull />
          <CableFly />
          <LateralRaise />
        </div>
      </div>

      {/* Day 2 Section */}
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 2</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Squat />
          <LegCurl />
          <LegExtension />
          <StandinCalfRaise />
        </div>
      </div>
    </div>
  );
};
