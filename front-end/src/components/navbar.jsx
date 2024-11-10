import React from "react";
import { CgGym } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between h-auto font-libre bg-[#343131] align-middle text-white">
      <div className="ml-9 my-3 flex justify-center w-auto items-center">
        <CgGym className="size-12" />
        <h1 className="font-libre text-3xl ml-2">FitFlex</h1>
      </div>

      <div className="h-auto mr-9 flex my-3">
        <div>
          <ul className="w-auto  rounded-lg border-2 border-[#A04747]  py-3 px-2 shadow-md mr-3">
            <li>
              <a href="#">Home</a>
            </li>
          </ul>
        </div>
        <div className="relative w-[100%] group">
          <button className="  flex justify-between rounded-lg border-2 border-[#A04747] w-52 py-3 px-2 shadow-md">
            Set your day
            <RiArrowDropDownLine className="fill-current h-6 w-6" />
          </button>
          <ul className="group-hover:block absolute text-gray-700 pt-1 shadow-md w-full hidden">
            <Link
              to="/programs/1"
              className="rounded-sm bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap"
            >
              One
            </Link>
            <Link
              to="/programs/2"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Two
            </Link>
            <Link
              to="/programs/3"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Three
            </Link>
            <Link
              to="/programs/4"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Four
            </Link>
            <Link
              to="/programs/5"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Five
            </Link>
            <Link
              to="/programs/6"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Six
            </Link>
            <Link
              to="/programs/7"
              className="rounded-t bg-gray-200 hover:bg-gray-300 py-2 px-4 block whitespace-nowrap "
            >
              Seven
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
