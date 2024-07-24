import speakingImg from "@/assets/speaking.svg";
import writingImg from "@/assets/writing.svg";
import readingImg from "@/assets/reading.svg";
import listeningImg from "@/assets/listening.svg";

const navLinks = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "skills",
  },
  {
    id: 3,
    link: "about-us",
  },
  {
    id: 4,
    link: "pricing",
  },
  {
    id: 5,
    link: "contact",
  },
];

const skillsData = [
  {
    title: "Speaking",
    primaryDescription:
      "Improve your English skills and confidence. Live classes and interactive lessons online. 20% extra free for a limited time only",
    secondaryDescription:
      "Learn English online and improve your skills through our high-quality courses and resources – all designed for adult language learners.",
    imgUrl: speakingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Writing",
    primaryDescription:
      "One of the most important and extensive areas of natural science, the science that studies substances, also their composition.",
    imgUrl: writingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Reading",
    primaryDescription:
      "Perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service.",
    imgUrl: readingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Listening",
    primaryDescription:
      "Here you can find activities to practice your listening skills. Listening will help you to improve your understanding.",
    imgUrl: listeningImg,
    btnTitle: "Learn more",
  },
];

const aboutStatsData = [
  {
    aboutStatsTitle: 800,
    aboutStatsDescription: "Pupils",
  },
  {
    aboutStatsTitle: 18,
    aboutStatsDescription: "Teachers",
  },
  {
    aboutStatsTitle: 6,
    aboutStatsDescription: "Foreign languages",
  },
];

export { navLinks, skillsData, aboutStatsData };
