import { FIGMA, GIT } from "@/public/images";

export type NavLink = {
  id: string;
  label?: string;
};

export type Service = {
  label: string;
  icon?: string;
};

export type Reference = {
  web?: string;
  android?: string;
  ios?: string;
};

export type Experience = {
  title: string;
  companyName: string;
  period: string;
  description?: string[];
  companyLink: string;
  hiringLink?: string;
  logo: string;
};

export type Project = {
  title: string;
  thumbnail?: string;
  member: number;
  descriptions: string;
  responsibilities: string[];
  technologies: string[];
  references?: Reference;
  domain: string[];
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

const programmingLanguages: Service[] = [
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "HTML" },
  { label: "CSS" },
  { label: "Swift" },
  { label: "Dart" },
];

const frameworksAndLibraries: Service[] = [
  { label: "React Native" },
  { label: "React" },
  { label: "Next.js" },
  { label: "Flutter" },
  { label: "Expo" },
  { label: "Redux" },
  { label: "Redux Saga" },
  { label: "React Query" },
  { label: "Context API" },
  { label: "Apollo Client" },
  { label: "React Hook Form" },
  { label: "Tailwind CSS" },
];

const mobileDevelopment: Service[] = [
  { label: "Native Modules" },
  { label: "Multi-environment Configuration" },
  { label: "Push Notifications" },
  { label: "Firebase" },
  { label: "Sentry" },
  { label: "Branch.io" },
  { label: "In-App Purchase" },
  { label: "Payment Integration" },
  { label: "Animations" },
  { label: "API Integration" },
  { label: "Authentication" },
];

const backendAndDatabase: Service[] = [
  { label: "NestJS" },
  { label: "Supabase" },
  { label: "Firebase" },
];

const devOpsAndTools: Service[] = [
  { label: "Git", icon: GIT },
  { label: "GitHub" },
  { label: "ESLint" },
  { label: "CI/CD" },
  { label: "Fastlane" },
  { label: "Figma", icon: FIGMA },
];

const testing: Service[] = [
  { label: "Unit Testing" },
  { label: "Integration Testing" },
  { label: "React Native Testing Library" },
  { label: "Detox" },
];

const others: Service[] = [
  { label: "Agile/Scrum Methodology" },
  { label: "App Store Deployment" },
  { label: "Google Play Deployment" },
];

const experiences: Experience[] = [
  {
    title: "React Native Developer",
    companyName: "FPT Information System",
    period: "Apr 2019 - Mar 2021",
    description: [
      "Developed and maintained cross-platform mobile applications using React Native.",
      "Integrated third-party libraries, improved app performance, and contributed to UI/UX enhancements in Agile development teams.",
    ],
    companyLink: "https://fpt-is.com/",
    hiringLink: "https://careers.fptis.com/vi",
    logo: "https://i.ibb.co/dJ59YFTs/download.png",
  },
  {
    title: "React Native & Frontend Developer",
    companyName: "HDWebsoft",
    period: "Apr 2021 - Mar 2024",
    description: [
      "Delivered mobile and web features using React Native, React, WordPress, TypeScript, and Expo across multiple client projects.",
      "Collaborated closely with designers, backend engineers, and QA teams to improve usability, stability, and delivery quality.",
    ],
    companyLink: "https://www.hdwebsoft.com/",
    hiringLink: "https://www.hdwebsoft.com/careers",
    logo: "https://i.ibb.co/ns71NybG/1631351241377.jpg",
  },
  {
    title: "React Native & Frontend Developer",
    companyName: "Haibazo",
    period: "Apr 2024 - Present",
    description: [
      "Develop and maintain cross-platform mobile applications using React Native, TypeScript, Expo, authentication flows, deep linking, and third-party service integrations.",
      "Build responsive web applications with React, Next.js, Tailwind CSS, and TypeScript, ensuring consistency between web and mobile UI systems.",
      "Manage release workflows and CI/CD pipelines using GitHub Actions, EAS Build, and app store deployment practices.",
    ],
    companyLink: "https://haibazo.com/",
    logo: "https://i.ibb.co/W4Hf48yR/haibazo.webp",
  },
];

const projects: Project[] = [
  {
    title: "Template Mobile App",
    descriptions:
      "A reusable React Native mobile app template designed to accelerate development for new projects.",
    member: 3,
    responsibilities: [
      "Integrated third-party libraries and configured the app startup flow.",
      "Built reusable base components to improve development consistency and scalability.",
      "Set up Fastlane and CI/CD workflows for mobile app build and deployment.",
    ],
    technologies: [
      "React Native",
      "Social Authentication",
      "Branch.io",
      "Redux",
      "Redux Saga",
      "Firebase",
      "Fastlane",
      "CI/CD",
    ],
    references: {
      web: "https://github.com/dangkhoa105/react-native-template",
    },
    thumbnail: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    domain: ["Reusable"],
  },
  {
    title: "TCCentral",
    descriptions:
      "A multi-platform app for trading and exchanging collectible cards.",
    member: 2,
    responsibilities: [
      "Integrated third-party libraries.",
      "Created reusable base components.",
      "Develop an image editing tool.",
    ],
    technologies: [
      "Expo",
      "Expo Router",
      "Gluestack",
      "GraphQL client",
      "Responsive Web/App",
      "Animation",
    ],
    references: {
      web: "https://app.dev.tccentral.com/",
    },
    thumbnail: "https://i.ibb.co/4Z9g51db/heystack.png",
    domain: ["Collectibles", "Trading", "Marketplace"],
  },
  {
    title: "Trivia Bar",
    descriptions:
      "An online trivia platform that allows users to play free games or join paid contests across categories such as TV shows, history, and entertainment.",
    member: 3,
    responsibilities: [
      "Integrated third-party libraries, APIs, and real-time services.",
      "Implemented subscription features that allow users to purchase plans and access rooms based on their subscription tier.",
      "Integrated payment, in-app purchase, analytics, monitoring, and app update services.",
    ],
    technologies: [
      "React Native",
      "Social Authentication",
      "Branch.io",
      "Redux",
      "Redux Saga",
      "Stripe SDK",
      "In-App Purchase",
      "CodePush/App Center",
      "NetInfo",
      "Sentry",
      "Real-time",
    ],
    references: {
      ios: "https://apps.apple.com/us/app/the-trivia-bar/id1574468002",
      android:
        "https://play.google.com/store/apps/details?id=com.triviabar.app",
    },
    thumbnail: "https://i.ibb.co/ZzHDJn1b/triviabar.png",
    domain: ["Online Gaming", "Quiz", "Trivia"],
  },
  {
    title: "Actor Axis",
    descriptions:
      "A social networking application for entertainment industry professionals, newcomers, and enthusiasts. The app includes a user-curated map system, webinars, news, job listings, and a public stage for showcasing posts.",
    member: 3,
    responsibilities: [
      "Integrated third-party libraries, APIs, and services to enhance app functionality.",
      "Implemented short video features and social interaction flows.",
      "Integrated in-app purchase for buying stars and supported map-based features.",
    ],
    technologies: [
      "React Native",
      "Social Authentication",
      "Firebase",
      "Google Maps",
      "Branch.io",
      "Redux",
      "Redux Saga",
      "In-App Purchase",
      "Sentry",
      "Real-time",
    ],
    references: {
      web: "https://www.actorsaxis.com/",
      ios: "https://apps.apple.com/us/app/actors-axis/id6448968060",
      android:
        "https://play.google.com/store/apps/details?id=com.actorsaxis.app",
    },
    thumbnail: "https://i.ibb.co/nsFDSF5k/actoraxis.jpg",
    domain: ["Social Networking", "Entertainment"],
  },
  {
    title: "IMP",
    descriptions:
      "A call management application for handling and recording calls. The app connects mobile devices to manufacturer-specific boxes via Bluetooth Low Energy, supporting call handling, phone number processing, contact syncing, and call recording.",
    member: 2,
    responsibilities: [
      "Integrated third-party libraries, APIs, and services to enhance app functionality.",
      "Implemented Bluetooth Low Energy connection with external devices.",
      "Handled contact synchronization from the device and developed chart-based data visualization.",
    ],
    technologies: [
      "React Native",
      "Redux",
      "Redux Saga",
      "Redux Persist",
      "Bluetooth Low Energy",
      "Sentry",
      "Animation",
      "Victory Charts",
    ],
    references: {
      android:
        "https://play.google.com/store/apps/details?id=com.itsmyphone.imp",
      ios: "https://apps.apple.com/us/app/imp-imp-box-controller/id1509443801",
    },
    thumbnail: "https://i.ibb.co/Xkpvwv2k/imp.png",
    domain: ["Telecommunications", "Call Management", "Mobile Technology"],
  },
  {
    title: "Company Website",
    descriptions:
      "A corporate website designed to introduce the company's services, expertise, projects, and brand identity.",
    member: 1,
    responsibilities: [
      "Built responsive web pages using Next.js and TypeScript.",
      "Implemented interactive UI animations and smooth transitions using GSAP and Motion.",
      "Optimized layout, visual consistency, and user experience across desktop and mobile devices.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "GSAP",
      "Motion",
      "Responsive Web Design",
    ],
    references: {
      web: "https://haibazo.com/",
    },
    thumbnail: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    domain: ["Corporate Website", "Frontend", "Brand Identity"],
  },
  {
    title: "RFS",
    descriptions:
      "A course management web application that allows users to create, upload, manage, view, and register for courses.",
    member: 1,
    responsibilities: [
      "Developed responsive web interfaces using React.js.",
      "Implemented course creation, upload, management, viewing, and registration flows.",
      "Integrated API data fetching and state management using TanStack Query and Zustand.",
      "Improved UI consistency and user experience across course management features.",
    ],
    technologies: [
      "React.js",
      "TanStack Query",
      "Zustand",
      "JavaScript/TypeScript",
      "Responsive Web Design",
    ],
    thumbnail: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    domain: ["Course Management", "Education", "Frontend"],
  },
];

export {
  backendAndDatabase,
  devOpsAndTools,
  experiences,
  frameworksAndLibraries,
  mobileDevelopment,
  navLinks,
  others,
  programmingLanguages,
  projects,
  testing,
};
