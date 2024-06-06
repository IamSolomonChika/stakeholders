import React from "react";

function Home() {
  return (
    <div className=" w-full overflow-scroll h-[95%]">
      <div className="flex items-center justify-between h-[6vh] w-full">
        <div className="flex items-center ml-2 rounded-lg bg-slate-600">
          <div className="w-10 h-10 rounded-full mr-4">
            {/* Profile image goes here */}
            <img
              src="../../—Pngtree—female user vector avatar icon_4005056.png"
              alt="Profile"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="">
            <div className="font-bold mr-2">John Doe</div>
          </div>
        </div>
        <div className="relative inline-block text-left mr-2">
          {/* Dropdown goes here */}
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              Options
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-0"
              >
                Option 1
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-1"
              >
                Option 2
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                tabIndex="-1"
                id="menu-item-2"
              >
                Option 3
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[10vh] w-full"></div>
      <div className="w-full flex">
        <div className="w-1/3 h-[10vh] bg-red-300"></div>
        <div className="w-1/3 h-[10vh] bg-blue-300"></div>
        <div className="w-1/3 h-[10vh] bg-red-300"></div>
      </div>
      <div className="w-full h-[7vh] bg-red-300"></div>
      <div className="w-full h-[3vh] bg-blue-300"></div>
      <div className="w-full h-[3vh] bg-red-300"></div>
      <div className="w-full h-[42vh] bg-blue-300"></div>
      <div className=" relative w-full h-[5vh] bg-red-300"></div>
    </div>
  );
}

export default Home;
