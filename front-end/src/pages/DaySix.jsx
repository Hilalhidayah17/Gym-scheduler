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
import { Dips } from "../components/exercise/Dips.jsx";
import { OneArmPullDown } from "../components/exercise/OneArmPullDown.jsx";
import { EzBarCurl } from "../components/exercise/EzBarCurl.jsx";
import { Deadlift } from "../components/exercise/Deadlift.jsx";
import { LegPress } from "../components/exercise/LegPress.jsx";
import { BarbellBench } from "../components/exercise/BarbellBench.jsx";
import { PullUp } from "../components/exercise/PullUp.jsx";
import { DbShrug } from "../components/exercise/DbShrug.jsx";
import { RDL } from "../components/exercise/RDL.jsx";
import { CableLateral } from "../components/exercise/CableLateral.jsx";
import { SMPress } from "../components/exercise/SMPress.jsx";
import { UHBentOver } from "../components/exercise/UHBentOver.jsx";

export const DaySix = () => {
  return (
    <div className="font-libre">
      <Navbar />
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 1 (Push)</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <BarbellBench />
          <CableFly />
          <DumbellShoulderPress />
          <Dips />
          <LateralRaise />
        </div>
      </div>
      <div className="p-4 ">
        <div className="text-center my-8 ">
          <h2 className="text-3xl font-bold text-gray-800">Day 2 (Pull)</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <PullUp />
          <BentOverRow />
          <ReversePeckDeck />
          <HammerCurl />
          <DbShrug />
          <SeatedCableRow />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 3 Leg</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Squat />
          <RDL />
          <LegExtension />
          <StandinCalfRaise />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 4 Push</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2 ">
          <InclineBenchPress />
          <CableFly />
          <SMPress />
          <CableLateral />
          <CablePushDown />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 5 Pull</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2 ">
          <UHBentOver />
          <LatPull />
          <OneArmPullDown />
          <HammerCurl />
          <DumbleCurl />
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 6 Leg</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2 ">
          <Squat />
          <RDL />
          <LegCurl />
          <LegExtension />
          <StandinCalfRaise />
        </div>
      </div>
    </div>
  );
};
