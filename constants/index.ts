import { ANDROID_STUDIO, CHATGPT, FIGMA, GIT, XCODE } from "@/public/images";

export type NavLink = {
  id: string;
  label?: string;
};

export type Service = {
  label: string;
  icon?: string;
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
];

const tools: Service[] = [
  { label: "GIT", icon: GIT },
  { label: "Figma", icon: FIGMA },
  { label: "ChatGPT", icon: CHATGPT },
  { label: "Android Studio", icon: ANDROID_STUDIO },
  { label: "XCode", icon: XCODE },
];

const projects = [];

export { navLinks, projects, techStacks, tools };
