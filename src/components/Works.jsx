import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import CustomCarousel from "./CustomCarousel";
import ArrowUpRight from "./canvas/icons/ArrowUpRight";
import { Icon } from "./Icon";
import SassIcon from "../components/canvas/aboutIcons/Sass";
import VueIcon from "../components/canvas/aboutIcons/Vue";
import { re } from "../assets";

const ProjectCard = ({ name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
      <div className="bg-transparent border-white/[0.1] p-5  border  rounded-2xl w-full sm:h-[32rem] flex flex-col md:h-[30rem]">
        <div className="relative w-full mt-2">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl md:h-[15rem]"
          />
        </div>
        <div className="flex flex-1 justify-between flex-col">
          {/* Title and Description */}
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-white/60 text-[14px]">{description}</p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              <div
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 0 + 2}px)`,
                }}
              >
                <img src={re} alt="icon5" className="p-2" />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 1 + 2}px)`,
                }}
              >
                <img src={re} alt="icon5" className="p-2" />
              </div>
              <div
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{
                  transform: `translateX(-${5 * 2 + 2}px)`,
                }}
              >
                <img src={re} alt="icon5" className="p-2" />
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <a
                href="https://google.com"
                target="_blank"
                className=" text-secondary flex gap-2"
              >
                View Project
                <ArrowUpRight className="size-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="px-4 md:px-8 lg:px-14 max-w-7xl  mx-auto relative z-0 overflow-hidden">
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} bg-[#915eff] text-transparent bg-clip-text`}
        >
          My work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <CustomCarousel>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </CustomCarousel>
      <CustomCarousel></CustomCarousel>
    </div>
  );
};

export default Works;
