import React from "react";
import personalPic from "../assets/images/personal-picture.png";
import MouseIcon from "./canvas/icons/MouseIcon";
import ArrowDownIcon from "./canvas/icons/ArrowDownIcon";
import { SectionWrapper } from "../hoc";

const Hero = () => {
  return (
    <section className="relative w-full h-screen px-16 py-16 max-w-7xl mx-auto z-0">
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center  z-10 md:items-start lg:flex-row-reverse lg:h-full lg:items-center`}
      >
        {/* Content container */}
        <div className="md:relative md:h-1/2 md:w-full lg:absolute">
          <img
            src={personalPic}
            alt="project_image"
            className="relative w-full top-[1rem] -left-[5px] mb-[2rem] md:w-[38rem] md:absolute md:top-2/4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 lg:w-[32rem] lg:absolute lg:transform-none lg:-top-[5rem] xl:w-[38rem] xl:-top-[6rem]"
          />
        </div>
        <div className="text-center z-50 lg:text-left  lg:mx-0 lg:mr-[20rem] xl:mr-[30rem] ">
          {/* Text Container */}
          <div>
            <h1 className="text-4xl font-bold md:text-6xl mt-8 tracking-wide text-white ">
              Hi! I'm <span className="text-[#915eff]">Rheina</span>
            </h1>
            <h4 className="mt-4 font-normal text-secondary text-xl md:text-2xl">
              Fullstack Developer
            </h4>
            <p className="mt-4 md:text-lg md:px-10 lg:px-0 ">
              Driven by a passion for technology and problem-solving, I
              specialize in crafting seamless digital experiences from concept
              to deployment.
            </p>
          </div>

          {/* Button container */}
          <div className="mt-10 gap-4">
            <div className="hidden lg:inline-flex md:items-center animate-up-down">
              <MouseIcon className="mx-0 mr-2  flex items-center justify-center size-12" />
              <span className="font-normal pr-2 text-lg">Scroll Down</span>
              <ArrowDownIcon className="size-4 mt-[2px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
