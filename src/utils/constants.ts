import {
  SpeakingImg,
  WritingImg,
  ReadingImg,
  ListeningImg,
  PricingImg1,
  PricingImg2,
  PricingImg3,
} from "@/assets";

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
    imgUrl: SpeakingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Writing",
    primaryDescription:
      "One of the most important and extensive areas of natural science, the science that studies substances, also their composition.",
    imgUrl: WritingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Reading",
    primaryDescription:
      "Perception and response actions of the user resulting from the use and/or upcoming use of the product, system or service.",
    imgUrl: ReadingImg,
    btnTitle: "Learn more",
  },
  {
    title: "Listening",
    primaryDescription:
      "Here you can find activities to practice your listening skills. Listening will help you to improve your understanding.",
    imgUrl: ListeningImg,
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

const pricingData = [
  {
    title: "Self-study online course",
    description:
      "Start learning English online in live classes with qualified EC teachers and students from all over the world.",
    price: "£5.99",
    img: PricingImg1,
  },
  {
    title: "Live online classes",
    description:
      "Interactive group classes with expert teachers. Free 7-day trial",
    price: "£12.99",
    img: PricingImg2,
  },
  {
    title: "Personal Tuition",
    description:
      "Online one-to-one English tutoring – enjoy our first session for only $1",
    price: "£20.99",
    img: PricingImg3,
  },
];

const footerLinks = [
  {
    link: "Terms and Conditions",
  },
  {
    link: "Privacy Policy",
  },
  {
    link: "Cookie Policy",
  },
];

export { navLinks, skillsData, aboutStatsData, pricingData, footerLinks };
