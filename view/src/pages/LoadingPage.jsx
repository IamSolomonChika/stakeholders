import React from "react";

function LoadingPage() {
  return (
    <div>
      <a href="#" target="_blank">
        <img
          src="/asz.jpg"
          className="rounded-[50%] h-24 m-auto mb-12"
          alt="Stake Holders Logo"
        />
      </a>
      <h1 className="text-3xl mt-1 mb-4 font-bold">Stake Holders</h1>
      <div className="card block">
        <span className="relative flex h-28 w-28 m-auto">
          <span className="animate-ping absolute m-auto inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full m-auto h-3 w-3 bg-[#242424]"></span>
        </span>
      </div>
      <p className="read-the-docs font-semibold mx-10">
        Hold on, we are preparing your stakes for you...
      </p>
    </div>
  );
}

export default LoadingPage;
