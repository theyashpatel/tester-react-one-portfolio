import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-blue-900">
      <div className="max-w-screen-lg mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          Yash Patel
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-400">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-400 py-4 max-w-2xl">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 ">
            View Work{" "}
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
