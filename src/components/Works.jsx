// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import CustomCarousel from "./CustomCarousel";
import ArrowUpRight from "./canvas/icons/ArrowUpRight";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ name, description, image, projectLink, githubLink }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", 0.5, 1)}>
      <div className="bg-transparent border-white/[0.1] p-5  border  rounded-xl w-full sm:h-full flex flex-col md:h-[30rem]">
        <div className="relative w-full mt-2">
          <img
            src={image}
            alt="project_image"
            className="w-full h-[15rem] object-cover rounded-lg md:h-[15rem]"
          />
        </div>
        <div className="flex flex-1 justify-between flex-col">
          {/* Title and Description */}
          <div className="mt-5">
            <h3 className="text-white text-center md:text-start font-bold text-[24px]">
              {name}
            </h3>
            <p className="mt-2 text-center text-white/60 md:text-start text-[14px]">
              {description}
            </p>
          </div>

          {/* Buttons */}
          <div
            className={`flex ${
              githubLink
                ? "flex-col md:flex-row md:justify-between"
                : "justify-center md:justify-end"
            } items-center text-center mt-7 mb-3`}
          >
            {githubLink && (
              <div className="flex items-center mb-4 md:mb-0 justify-center">
                <a
                  href={githubLink}
                  target="_blank"
                  className="text-secondary flex gap-2"
                >
                  View Source Code
                  <ArrowUpRight className="size-6" />
                </a>
              </div>
            )}
            <div className="flex justify-center items-center">
              <a
                href={projectLink}
                target="_blank"
                className="text-secondary flex gap-2"
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
          real-world examples of my work. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </motion.p>
      </div>
      <CustomCarousel>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </CustomCarousel>
      <CustomCarousel></CustomCarousel>
    </div>
  );
};

export default Works;
