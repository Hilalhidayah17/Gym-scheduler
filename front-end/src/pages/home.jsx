import React from "react";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="w-[100%] h-[100vh] bg-[#D8A25E] flex justify-center items-center ">
        <div>
          <div className="flex justify-center">
            <h1 className="text-white text-3xl my-4">WELCOME TO FITFLEX</h1>
          </div>
          <div className="flex justify-center">
            <h2 className="text-white text-2xl">
              The Most Update and Efficient Way to Help you Set Your Training
              Program!
            </h2>
          </div>
        </div>
      </main>
    </div>
  );
}
