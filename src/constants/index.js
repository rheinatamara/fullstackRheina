import {
  whitebox,
  prixa,
  smartheart,
  mockai,
  publicis,
  graphy,
  personal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "FullStack Developer and Web Designer",
    company_name: "WhiteBox Indonesia",
    icon: whitebox,
    iconBg: "#242323",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Contributed to application and website development with a focus on creating user-friendly interfaces.",
      "Collaborated on the frontend development of Mercu Buana University's website, demonstrating strong CSS/SCSS skills and supporting backend debugging.",
      "Designed website and mobile UI/UX for Ichiro Ramen Restaurant, aligning with client specifications to enhance customer experience.",
      "Assisted in redesigning existing brand interfaces to improve visual appeal and user engagement.",
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Prixa.ai",
    icon: prixa,
    iconBg: "#f3f3f3",
    date: "March 2022 - Oct 2022",
    points: [
      "Contributed to the maintenance and development of a doctor-patient online consultation platform, including appointment booking and AI-powered symptom checking.",
      "Coordinated with the team to debug and resolve issues across Prixa’s products.",
      "Developed Prixa’s component library using Storybook and other UI frameworks.",
      "Responsible for maintaining patient data to ensure accuracy and compliance",
    ],
  },
  {
    title: "Freelace UI/UX Designer",
    company_name: "Publicis Groupe",
    icon: publicis,
    iconBg: "#242323",
    date: "Jan 2023 - Dec 2023",
    points: [
      "Responsible for maintaining patient data to ensure accuracy and compliance",
      "Utilized Publicis Groupe’s brand colors, fonts, and visual elements for cohesive feel.",
      "Ensured the site is accessible to all users with clear text, captions, and a readable font.",
    ],
  },
];

const projects = [
  {
    name: "SmartHeart",
    description:
      "An AI-powered dating app that matches users based on their personality traits and interests. Users are instantly connected to their compatible matches, allowing them to chat with each other.",

    image: smartheart,
    projectLink: "https://smartheart-267b8.web.app/",
    githubLink: "https://github.com/RMT-Team3",
  },
  {
    name: "MockAI",
    description:
      "An AI-powered app designed to help users practice job interviews interactively. By using AI, users can simulate various types of interviews based on job positions, industries, or their level of experience.",

    image: mockai,
    projectLink: "https://mockai-bfb73.web.app/",
    githubLink: "https://github.com/rheinatamara/MockAI",
  },

  {
    name: "Graphy",
    description:
      "Full-featured social networking app built using React Native, MongoDB, and Apollo GraphQL, designed to deliver an interactive experience similar to Facebook.",

    image: graphy,
    projectLink: "https://l1nq.com/yIw8Z",
    githubLink: "https://github.com/rheinatamara/Graphy",
  },
  {
    name: "FullstackRheina",
    description:
      "A personal website built with React , ThreeJS and Tailwind, showcasing my portfolio and skills. It features a responsive design and smooth animations, providing an engaging user experience.",

    image: personal,
    projectLink: "https://rheina.site",
    githubLink: "https://github.com/rheinatamara/fullstackRheina",
  },
];

export { experiences, projects };
