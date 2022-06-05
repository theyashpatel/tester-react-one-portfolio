import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import aws from "../assets/aws.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-blue-900 w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-pink-600 inline">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={html} alt="" className="w-20 mx-auto" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={css} alt="" className="w-20 mx-auto" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={javascript} alt="" className="w-20 mx-auto" />
            <p className="mt-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={aws} alt="" className="w-20 mx-auto" />
            <p className="mt-4">AWS</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={mongo} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={reactImage} alt="" className="w-20 mx-auto" />
            <p className="mt-4">React</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={tailwind} alt="" className="w-20 mx-auto" />
            <p className="mt-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-blue-800 hover:scale-105 duration-500 py-2">
            <img src={github} alt="" className="w-20 mx-auto" />
            <p className="mt-4">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
