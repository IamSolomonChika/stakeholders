import React from "react";
import {GiMiner, GiPartyPopper} from "react-icons/gi"
import {BsCoin} from "react-icons/bs"
import {IoIosPeople} from "react-icons/io"
import {FaQuestion} from "react-icons/fa"
function Navbar() {
  return (
    <div className="fixed z-50 h-12 w-screen max-w-96 -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full w-screen max-w-96 grid-cols-5 mx-auto">
        <button
          data-tooltip-target="tooltip-chain"
          type="button"
          className="inline-flex flex-col items-center justify-center h-12 px-5 rounded-s-full hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <FaQuestion className="h-6 w-6"/>
          <span className="sr-only">Chain</span>
          <span className="text-[12px] font-semibold h-3 py-1">Chain</span>
        </button>
        <div
          id="tooltip-chain"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Chain
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-friends"
          type="button"
          className="inline-flex flex-col items-center justify-center h-12 px-5 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <IoIosPeople className="h-7 w-7"/>
          <span className="sr-only">Friends</span>
          <span className=" text-[12px] font-semibold h-3 py-0.5">Friends</span>
        </button>
        <div
          id="tooltip-friends"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Friends
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-mine"
          type="button"
          className="inline-flex flex-col items-center justify-center h-12 px-5 text-gray-300 hover:bg-gray-50  hover:text-blue-500 dark:hover:bg-gray-800 group"
        >
          <GiMiner className="h-7 w-7"/>
          <span className="sr-only">Mine</span>
          <span className=" text-[12px] font-semibold h-3 py-0.5">Mine</span>
        </button>
        <div
          id="tooltip-Mine"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Mine
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-earn"
          type="button"
          className="inline-flex flex-col items-center justify-center h-12 px-5 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <BsCoin className="h-7 w-7 m-0"/>
          <span className="sr-only">Earn</span>
          <span className=" text-[12px] font-semibold h-3 py-0.5">Earn</span>
        </button>
        <div
          id="tooltip-earn"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Earn
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          data-tooltip-target="tooltip-contest"
          type="button"
          className="inline-flex flex-col items-center justify-center h-12 px-5 rounded-e-full hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800 group"
        >
          <GiPartyPopper className="h-7 w-7"/>
          <span className="sr-only">Contest</span>
          <span className=" text-[12px] font-semibold h-3 py-0.5">Contest</span>
        </button>
        <div
          id="tooltip-contests"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Contest
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
