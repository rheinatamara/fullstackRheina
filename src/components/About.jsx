import { Card } from "./Card";
import bookImage from "../assets/images/book-cover.png";
import JavascriptIcon from "../components/canvas/aboutIcons/Javascript";
// import HTMLIcon from '../components/canvas/aboutIcons/HTML'
import NodeIcon from "../components/canvas/aboutIcons/Node";
import CSSIcon from "../components/canvas/aboutIcons/CSS";
import ReactIcon from "../components/canvas/aboutIcons/React";
// import SwiftIcon from '../components/canvas/aboutIcons/Swift'

import FigmaIcon from "../components/canvas/aboutIcons/Figma";
// import GithubIcon from '../components/canvas/aboutIcons/Github'
import mapImage from "../assets/images/map.jpg";
import smileMemoji from "../assets/images/memoji-smile.png";
import { CardHeader } from "./CardHeader";
import { ToolboxItems } from "./ToolboxItems";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import { useRef } from "react";
const leftToCenter = () => ({
  hidden: { opacity: 0, x: -100 }, // Starts off-screen to the left
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
});
const rightToCenter = () => ({
  hidden: { opacity: 0, x: 100 }, // Starts off-screen to the right
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
});
const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },

  {
    title: "Node",
    iconType: NodeIcon,
  },

  {
    title: "CSS3",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Figma",
    iconType: FigmaIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Guitar",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Crocheting",
    emoji: "🧶",
    left: "35%",
    top: "40%",
  },
  {
    title: "Drawing",
    emoji: "✏️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    left: "80%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "⛰️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

const About = () => {
  const containerRef = useRef(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} bg-[#915eff] text-transparent bg-clip-text text-center`}
        >
          About Me
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          A Glimpse Into My World
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col gap-8">
        {/* First Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-8 lg:grid-cols-3">
          {/* Book */}

          <motion.div
            variants={leftToCenter()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger only when 20% is in view
            className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1"
          >
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives"
              />
              <div className="w-40 mx-auto mt-4 md:mt-0">
                <img src={bookImage} alt="Book cover" />
              </div>
            </Card>
          </motion.div>

          {/* Toolbox */}
          <motion.div
            className="h-[320px] md:col-span-3 lg:col-span-2" // Applied to motion.div to preserve layout
            variants={rightToCenter()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is in view
          >
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft digital experiences."
              />
              <ToolboxItems
                items={toolboxItems}
                className=""
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6 -translate-x-1/2"
                itemsWrapperClassname="-translate-x-1/2 animate-move-right animate-move-left [animation-duration:15s]"
              />
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
          <motion.div
            className="h-[320px] md:col-span-3 lg:col-span-2"
            variants={leftToCenter()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realms."
                className="px-6 py-6"
              />
              <div ref={containerRef} className="relative flex-1">
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-[#915eff] to-sky-400 rounded-full py-1.5 absolute z-20"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={containerRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Map Card */}
          <motion.div
            className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1"
            variants={rightToCenter()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <img
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center after:content-[''] after:absolute after:inset-0 after:rounded-full after:border-2 after:border-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915eff] to-sky-400 -z-20 animate-ping [animation-duration:2s]">
                  {" "}
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#915eff] to-sky-400 -z-10">
                  {" "}
                </div>
                <img
                  src={smileMemoji}
                  alt="smile memoji"
                  className="w-16 h-16"
                />
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
