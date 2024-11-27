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

export const DaySeven = () => {
  return (
    <div className="font-libre">
      <Navbar />
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 1 Push</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <InclineBenchPress />
          <DumbellShoulderPress />
          <LateralRaise />
          <Dips />
        </div>
      </div>
      <div className="p-4 ">
        <div className="text-center my-8 ">
          <h2 className="text-3xl font-bold text-gray-800">Day 2 Pull</h2>
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
          <h2 className="text-3xl font-bold text-gray-800">Day 3 LEGS</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Deadlift />
          <Squat />
          <LegCurl />
          <StandinCalfRaise />
          <LegPress />
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Day 4 Active Rest
          </h2>
          <p>
            Choose jogging, cycling, or rowing. The goal is to do low intensity
            long duration cardio, which means after your cardio session you
            should be comfortably tired, not exhausted lying in a pile of sweat
            on the floor, or in other words, aim for 60-75% of your max heart
            rate consistently for the length of the cardio session. Length of
            time: 30-45 minutes (up to as much as 60 minutes is ok, no more than
            that). If you play a sport, you can also opt to do that sport on
            this day (i.e. pick up basketball game). However, an intense game
            can end up being too taxing on the body, so proceed with caution.
          </p>
        </div>
      </div>
      <div className="p-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Day 5 Push</h2>
        </div>

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
          <h2 className="text-3xl font-bold text-gray-800">Day 6 Pull</h2>
        </div>

        {/* Exercises for Day 2 */}
        <div className="grid gap-6 lg:grid-cols-2 ">
          <LatPull />
          <SeatedCableRow />
          <OneArmPullDown />
          <ReversePeckDeck />
          <EzBarCurl />
        </div>
      </div>
      <div className="p-4">
        <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Day 7 Mobility Workout
          </h2>
          <p>
            You are going to do a full body mobility routine to end the week.
            This is essentially an active recovery day. Mobility training is
            going to give you a greater joint range of motion and freedom of
            movement, decrease your risk of injury, reduce muscle tension and
            soreness, improve your posture and movement efficiency, and increase
            your overall coordination and energy levels.
          </p>
        </div>
      </div>
    </div>
  );
};
