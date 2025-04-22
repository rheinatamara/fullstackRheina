import React from "react";
import personalPic from "../assets/images/personal-picture.png";
import MouseIcon from "./canvas/icons/MouseIcon";
import ArrowDownIcon from "./canvas/icons/ArrowDownIcon";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Hero = () => {
  return (
    <section className="relative w-full h-screen px-16 py-16 max-w-7xl mx-auto z-0">
      <motion.div
        className="absolute inset-0 flex flex-col justify-center items-center z-10 md:items-start lg:flex-row-reverse lg:h-full lg:items-center"
        variants={fadeIn("", "spring", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        {/* Content container */}
        <motion.div
          className="md:relative md:h-1/2 md:w-full lg:absolute"
          variants={fadeIn("left", "spring", 0.4, 1)}
        >
          <img
            src={personalPic}
            alt="project_image"
            className="relative w-full top-[4rem] -left-[5px] mb-[2rem] md:w-[38rem] md:absolute md:top-2/4 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 lg:w-[32rem] lg:absolute lg:transform-none lg:-top-[5rem] xl:w-[38rem] xl:-top-[6rem]"
          />
        </motion.div>
        <motion.div
          className="text-center z-50 lg:text-left lg:mx-0 lg:mr-[20rem] xl:mr-[30rem]"
          variants={fadeIn("right", "spring", 0.6, 1)}
        >
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
              specialize in both frontend and backend development. I turn ideas
              into full-fledged applications.
            </p>
          </div>

          {/* Button container */}
          <div className="mt-10 gap-4">
            <div className="hidden lg:inline-flex md:items-center animate-up-down">
              <MouseIcon className="mx-0 mr-2 flex items-center justify-center size-12" />
              <span className="font-normal pr-2 text-lg">Scroll Down</span>
              <ArrowDownIcon className="size-4 mt-[2px]" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Hero, "hero");
