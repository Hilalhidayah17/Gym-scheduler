import React from "react";
import Navbar from "../components/navbar";
import Squat from "../assets/Squat.gif";
import InclineChess from "../assets/incline_chess_press.gif";
import OverHeadPress from "../assets/overhead_press.gif";
import LatPull from "../assets/MAG_LAT_PULL_DOWN.gif";
import Dips from "../assets/Dips.gif";

export const DayOne = () => {
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
            <h2 className="text-2xl font-bold mb-2">BARBELL SQUAT</h2>
            <p className="text-gray-700">
              The barbell squat is a strength training exercise that targets the
              muscles of the lower body, particularly the quadriceps,
              hamstrings, and glutes. It is a compound exercise, meaning it
              works multiple muscle groups simultaneously. The exercise is
              performed using a barbell, which is a long, straight bar that is
              weighted with plates.
            </p>
          </div>
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
              Incline Barbell Bench Press
            </h2>
            <p className="text-gray-700">
              The incline bench press is a compound exercise that primarily
              targets the upper chest muscles, but also engages the front
              shoulders and triceps. The movement is typically performed on an
              incline bench raised at an angle of about 30 to 45 degrees.
            </p>
          </div>
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
            <h2 className="text-2xl font-bold mb-2">Dumbbell Shoulder Press</h2>
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
          </div>
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
            <h2 className="text-2xl font-bold mb-2">Lat Pull Down</h2>
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
          </div>
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
            <h2 className="text-2xl font-bold mb-2">Dips</h2>
            <p className="text-gray-700">
              A dip is an upper-body strength exercise. Close grip dips
              primarily train the triceps, with major synergists being the
              anterior deltoid, the pectoralis muscles, and the rhomboid muscles
              of the back.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};