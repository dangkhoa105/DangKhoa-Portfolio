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
  { label: "GraphQL" },
  { label: "Apollo Client" },
  { label: "TailwindCSS" },
  { label: "Firebase" },
  { label: "BranchIO" },
  { label: "Sentry" },
];

const tools: Service[] = [
  { label: "GIT", icon: "/images/git.svg" },
  { label: "Figma", icon: "/images/figma.svg" },
  { label: "ChatGPT", icon: "/images/chatgpt.svg" },
  { label: "Android Studio", icon: "/images/android-studio.svg" },
  { label: "XCode", icon: "/images/xcode.svg" },
];

export { navLinks, techStacks, tools };
