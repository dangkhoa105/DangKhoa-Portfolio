import { ANDROID_STUDIO, CHATGPT, FIGMA, GIT, XCODE } from "@/public/images";

export type NavLink = {
  id: string;
  label?: string;
};

export type Service = {
  label: string;
  icon?: string;
};

export type Experience = {
  title: string;
  companyName: string;
  description?: string[];
  companyLink: string;
  hiringLink?: string;
  logo: string;
};

const navLinks: NavLink[] = [
  {
    id: "about-section",
    label: "About",
  },
  {
    id: "work-section",
    label: "Work",
  },
  {
    id: "contact-section",
    label: "Contact",
  },
];

const techStacks: Service[] = [
  { label: "React Native" },
  { label: "Expo" },
  { label: "ReactJs" },
  { label: "Flutter" },
  { label: "NextJs" },
  { label: "TypeScript" },
  { label: "HTML/CSS" },
  { label: "Wordpress" },
  { label: "GraphQL" },
  { label: "Apollo Client" },
  { label: "TailwindCSS" },
  { label: "Firebase" },
  { label: "BranchIO" },
  { label: "Sentry" },
  { label: "ESLint" },
  { label: "CI/CD" },
  { label: "Fastlane" },
];

const tools: Service[] = [
  { label: "GIT", icon: GIT },
  { label: "Figma", icon: FIGMA },
  { label: "ChatGPT", icon: CHATGPT },
  { label: "Android Studio", icon: ANDROID_STUDIO },
  { label: "XCode", icon: XCODE },
];

const experiences: Experience[] = [
  {
    title: "React Native Developer",
    companyName: "FPT Information System",
    description: [
      "Developed and maintained cross-platform mobile apps using React Native.",
      "Optimized performance, integrated third-party libraries.",
      "Collaborated with teams to enhance UI/UX.",
    ],
    companyLink: "https://fpt-is.com/",
    hiringLink: "https://careers.fptis.com/vi",
    logo: "https://i.ibb.co/dJ59YFTs/download.png",
  },
  {
    title: "React Native & Frontend Developer",
    companyName: "HDWebsoft",
    description: [
      "Developed and maintained cross-platform mobile and web applications using React Native, TypeScript, React, HTML/CSS, WordPress, and Expo.",
      "Optimized performance, integrated third-party libraries, and implemented authentication flows.",
      "Collaborated with teams to enhance UI/UX.",
      "Managed builds and deployments using Fastlane, CI/CD pipelines, GitHub Actions, and EAS Build.",
    ],
    companyLink: "https://www.hdwebsoft.com/",
    hiringLink: "https://www.hdwebsoft.com/careers",
    logo: "https://i.ibb.co/ns71NybG/1631351241377.jpg",
  },
];
const projects = [];

export { experiences, navLinks, projects, techStacks, tools };
