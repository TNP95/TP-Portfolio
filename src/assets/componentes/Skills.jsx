import React from "react";
import react from "../react.png";
import css from "../css.png";
import html from "../html.png";
import javascript from "../javascript.png";
import mongo from "../mongo.png";
import node from "../node.png";
import tailwind from "../tailwind.png";

const CardContainer = ({ children }) => {
  return (
    <div id="skills" className=" flex flex-col text-center items-center pt-[12vh]">
      <h4 className="font-bold text-5xl mb-5 ml-5 p-10 text-cyan-400 flex flex-col animate-pulse">
        Skills
      </h4>
      <div className="flex flex-col items-center md:flex md:flex-row items-center gap-[5rem]">
        <div
          className="flex flex-col items-center w-[16rem] lg:w-[25rem] md:h-[80vh] bg-gradient-to-r from-blue-800
to-cyan-300 rounded-3xl "
        >
          {children}

          <p className="text-white text-center text-3xl p-6">Front-End</p>
          <img className="h-16 w-18 mt-4" src={react} alt="logo" />
          <img className="h-16 w-16 mt-4" src={css} alt="logo" />
          <img className="h-16 w-20 mt-4" src={html} alt="logo" />
          <img className="h-20 w-20 mt-4" src={javascript} alt="logo" />
          <img className="h-20 w-20 mt-4 mb-8" src={tailwind} alt="logo" />
        </div>
        <div
          className="flex flex-col items-center w-[16rem] h-[80vh] h-[60vh] md:w-[25rem]  bg-gradient-to-r from-blue-800
to-cyan-300 rounded-3xl "
        >
          {children}
          <p className="h-16 text-white text-3xl p-6">Back-End</p>
          <img
            className="h-[8rem] w-18 flex justify-center mt-36"
            src={mongo}
            alt="logo"
          />
          <img
            className="h-20 w-18 mt-4 flex justify-center "
            src={node}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
