import React from "react";
import Navbar from "../components/navbar";
import { InclineBenchPress } from "../components/exercise/InclineBenchPress";
import { LateralRaise } from "../components/exercise/LateralRaise";
import { ReversePeckDeck } from "../components/exercise/ReversePeckDeck";
import { CableFly } from "../components/exercise/CableFly";
import { DumbellShoulderPress } from "../components/exercise/DumbellShoulderPress";
import { CablePushDown } from "../components/exercise/CablePushDown";
import { Squat } from "../components/exercise/Squat.jsx";
import { LegCurl } from "../components/exercise/LegCurl.jsx";
import { LegExtension } from "../components/exercise/LegExtension.jsx";
import { StandinCalfRaise } from "../components/exercise/StandinCalfRaise.jsx";
import { SeatedCableRow } from "../components/exercise/SeatedCableRow.jsx";
import { LatPull } from "../components/exercise/LatPull.jsx";
import { BentOverRow } from "../components/exercise/BentOverRow.jsx";
import { DumbleCurl } from "../components/exercise/DumbleCurl.jsx";
import { HammerCurl } from "../components/exercise/HammerCurl.jsx";

export const DayThree = () => {
  return (
    <div className="font-libre">
      <Navbar />
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 1</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <InclineBenchPress />
          <CableFly />
          <LateralRaise />
          <DumbellShoulderPress />
          <ReversePeckDeck />
          <CablePushDown />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 2</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <SeatedCableRow />
          <LatPull />
          <BentOverRow />
          <DumbleCurl />
          <HammerCurl />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 3</h2>
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
