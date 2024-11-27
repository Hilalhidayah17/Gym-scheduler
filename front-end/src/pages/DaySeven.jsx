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
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto p-6">
        {/* Day 1 */}
        <Section
          title="Day 1 Push"
          exercises={[
            <InclineBenchPress />,
            <DumbellShoulderPress />,
            <LateralRaise />,
            <Dips />,
          ]}
        />
        {/* Day 2 */}
        <Section
          title="Day 2 Pull"
          exercises={[
            <PullUp />,
            <BentOverRow />,
            <ReversePeckDeck />,
            <HammerCurl />,
            <DbShrug />,
            <SeatedCableRow />,
          ]}
        />
        {/* Day 3 */}
        <Section
          title="Day 3 Legs"
          exercises={[
            <Deadlift />,
            <Squat />,
            <LegCurl />,
            <StandinCalfRaise />,
            <LegPress />,
          ]}
        />
        {/* Day 4 */}
        <RestDay
          title="Day 4 Active Rest"
          description={
            <>
              Choose jogging, cycling, or rowing. Aim for low-intensity,
              long-duration cardio, keeping your heart rate at 60-75% of its
              max. Time: 30-45 minutes. You can also play sports, but avoid
              overly intense sessions.
            </>
          }
        />
        {/* Day 5 */}
        <Section
          title="Day 5 Push"
          exercises={[
            <InclineBenchPress />,
            <CableFly />,
            <SMPress />,
            <CableLateral />,
            <CablePushDown />,
          ]}
        />
        {/* Day 6 */}
        <Section
          title="Day 6 Pull"
          exercises={[
            <LatPull />,
            <SeatedCableRow />,
            <OneArmPullDown />,
            <ReversePeckDeck />,
            <EzBarCurl />,
          ]}
        />
        {/* Day 7 */}
        <RestDay
          title="Day 7 Mobility Workout"
          description={
            <>
              A full-body mobility routine for recovery. Mobility training
              improves joint range of motion, reduces muscle tension, enhances
              posture, and promotes overall movement efficiency.
            </>
          }
        />
      </div>
    </div>
  );
};

const Section = ({ title, exercises }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-red-500 pb-2 mb-6 text-center">
      {title}
    </h2>
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {exercises.map((exercise, index) => (
        <div
          key={index}
          className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {exercise}
        </div>
      ))}
    </div>
  </div>
);

const RestDay = ({ title, description }) => (
  <div className="mb-12">
    <h2 className="text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-2 mb-6 text-center">
      {title}
    </h2>
    <div className="p-6 bg-blue-50 rounded-xl shadow-md">
      <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
    </div>
  </div>
);
