import React, { useState } from "react";
import RevPeckGif from "../../assets/ReversePeckGif.gif";
import { RevPeckModal } from "../seeMore/RevPeckModal";

export const ReversePeckDeck = () => {
  const [showRevPeckModal, setShowRevPeckModal] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex gap-6 items-center">
      <div className="border-gray-300 border-2 rounded-xl overflow-hidden flex-shrink-0 my-3">
        <img
          src={RevPeckGif}
          alt="Reverse Peck Deck"
          className="rounded-xl w-[150px] h-auto lg:w-[200px]"
        />
      </div>
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-2">Cable Fly (3 x 8-12)</h2>
        <p className="text-gray-700">
          The rear delt fly is one of those go-to moves that you've seen people
          doing just about every time you've stepped foot in a weight room. It's
          so popular because it's so simple; the most common approach to the
          exercise requires just grabbing a set of dumbbells, bending over, and
          raising the weights.
        </p>
        <button
          className="py-1 px-3 bg-[#A04747] text-white rounded-full my-3 "
          onClick={() => setShowRevPeckModal(true)}
        >
          See More
        </button>
      </div>
      {showRevPeckModal && (
        <RevPeckModal onClose={() => setShowRevPeckModal(false)} />
      )}
    </div>
  );
};
