import { ANDROID_STUDIO, CHATGPT, FIGMA, GIT, XCODE } from "@/public/images";

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

const projects: Project[] = [
  {
    title: "CRM",
    descriptions:
      "FPT's CRM application is a customer relationship management solution designed to help businesses manage sales, customer care, and internal workflows more efficiently. Key features include customer data management, sales pipeline tracking, ticket-based support, real-time dashboards, and integration with third-party systems (ERP, email, call center). It supports both web and mobile platforms, making it ideal for businesses aiming to enhance customer engagement and streamline operations.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries.",
      "Create reusable base components.",
      "Implement charts.",
    ],
    technologies: ["ReactNative", "Typescript", "Redux", "Redux Saga"],
    references: {
      web: "https://apps.fis.vn/product/5ffe74780af08870336be577",
    },
    thumbnail: "https://i.ibb.co/8n0BtY7f/crm.png",
    domain: ["Sales", "CRM"],
  },
  {
    title: "Template Mobile App",
    descriptions:
      "A reusable mobile ReactNative app template to accelerate development for new projects.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries.",
      "Integrate flow start up when open app.",
      "Create reusable base components.",
      "Setup Fastlane and CICD.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Native Module",
      "Social Authentication",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
      "Firebase",
      "Fastlane",
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
      "A multi-platform web app for trading and exchanging collectible cards.",
    member: 2,
    responsibilities: [
      "Integrate third-party libraries.",
      "Create reusable base components.",
      "Develop an image editing tool.",
      "Responsive for multi-platform web app.",
      "Create a responsive homepage built with WordPress and custom HTML/CSS to showcase product features and drive user engagement.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Expo",
      "Expo Router",
      "Gluestack",
      "GraphQL client",
      "Wordpress",
      "HTML/CSS",
      "Responsive Web/App",
      "Animation",
      "EAS Build",
    ],
    references: {
      web: "https://heystack.tech/",
    },
    thumbnail: "https://i.ibb.co/4Z9g51db/heystack.png",
    domain: ["Social", "E-commerce"],
  },
  {
    title: "Gemini Sport",
    descriptions:
      "A multi-platform web app for displaying and analyzing football player statistics and performance data. Built with ReactJS, React Native, and Tailwind CSS, it delivers a responsive, data-driven experience for coaches, scouts, and analysts.",
    member: 2,
    responsibilities: [
      "Integrate third-party libraries.",
      "Create reusable base components.",
      "Create charts.",
      "Responsive for multi-platform web app.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Expo",
      "Expo Router",
      "Gluestack V2",
      "Tailwindcss",
      "GraphQL client",
      "Wordpress",
      "HTML/CSS",
      "Responsive Web/App",
      "Animation",
      "EAS Build",
    ],
    references: {
      web: "https://geminisports.ai/",
    },
    thumbnail: "https://i.ibb.co/7J2dYcsP/gemini-sport.png",
    domain: ["SportsTechnology", "DataAnalytics"],
  },
  {
    title: "TheoDocs",
    descriptions:
      "A responsive homepage built with HTML/CSS to showcase product features and drive user engagement.",
    member: 2,
    responsibilities: ["Building responsive sections."],
    technologies: ["HTML/CSS", "Responsive Web/App"],
    references: {
      web: "https://www.theodocs.com/",
    },
    thumbnail: "https://i.ibb.co/TByrWhcQ/theodocs.png",
    domain: ["ProductMarketing"],
  },
  {
    title: "Trivia Bar",
    descriptions:
      "The Trivia Bar transforms bar trivia into an exciting online experience. Play for free or win over $1,000,000 in paid contests with categories like TV shows and history.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries, APIs, and services as needed to enhance app functionality.",
      "Implement a subscription feature that allows users to purchase plans to access rooms corresponding to their subscription tier.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Native Module",
      "Social Authentication",
      "Stripe SDK",
      "SocketIO",
      "Google Maps",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
      "Firebase",
      "Fastlane",
    ],
    references: {
      android:
        "https://play.google.com/store/apps/details?id=com.triviabar.app",
      ios: "https://apps.apple.com/us/app/the-trivia-bar/id1574468002",
    },
    thumbnail: "https://i.ibb.co/ZzHDJn1b/triviabar.png",
    domain: ["OnlineGaming", "Quiz", "Trivia"],
  },
  {
    title: "Booking",
    descriptions:
      "This booking app features role-based access for customers and staff. Customers can view services, book appointments, and track their booking history, while staff can manage schedules, confirm or update bookings, and monitor client activity. The app offers a seamless and secure experience across devices.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries.",
      "Integrate dynamic layout.",
      "Integrate dynamic theme.",
      "Setup Fastlane and CI/CD to build and create project.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Native Module",
      "Social Authentication",
      "In-app purchase",
      "SocketIO",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
      "Code Push",
      "Firebase",
      "Fastlane",
    ],
    thumbnail: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
    domain: ["Booking", "Scheduling", "BusinessSolutions"],
  },
  {
    title: "Actor Axis",
    descriptions:
      "Actors Axis is a social networking app designed for entertainment industry enthusiasts, whether professionals or newcomers. The app features a user-curated map system, webinars, news, job listings, and a stage for showcasing posts to the entire user base.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries, APIs, and services as needed to enhance app functionality.",
      "Implement short video feature.",
      "Implement an In-app purchase for buying star.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Social Authentication",
      "In-app purchase",
      "SocketIO",
      "Google Maps",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
      "Firebase",
      "Fastlane",
    ],
    references: {
      web: "https://www.actorsaxis.com/",
      android:
        "https://play.google.com/store/apps/details?id=com.actorsaxis.app",
      ios: "https://apps.apple.com/us/app/actors-axis/id6448968060",
    },
    thumbnail: "https://i.ibb.co/nsFDSF5k/actoraxis.jpg",
    domain: ["SocialNetworking", "Entertainment"],
  },
  {
    title: "PureIV",
    descriptions: "A marketplace app for buying and selling cocktails.",
    member: 3,
    responsibilities: [
      "Integrate third-party libraries, APIs, and services as needed to enhance app functionality.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Stripe SDK",
      "SocketIO",
      "Google Maps",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
      "Firebase",
      "Maps for delivery route tracking Realtime",
    ],
    references: {
      web: "https://pivhw.com/",
    },
    thumbnail: "https://i.ibb.co/jkNm7y11/pureiv.jpg",
    domain: ["E-commerce", "Marketplace"],
  },
  {
    title: "IMP",
    descriptions:
      "A call management app for handling and recording calls. Connected phones to manufacturer-specific boxes via Bluetooth (BLE), supported call handling, phone number processing, and call recording.",
    member: 2,
    responsibilities: [
      "Integrate third-party libraries, APIs, and services as needed to enhance app functionality.",
      "Implement connect BLE.",
      "Handle sync contacts from device.",
      "Implement chart.",
    ],
    technologies: [
      "ReactNative",
      "Typescript",
      "Silent Notification",
      "Sentry",
      "BranchIO",
      "Redux",
      "Redux Saga",
    ],
    references: {
      android:
        "https://play.google.com/store/apps/details?id=com.itsmyphone.imp",
      ios: "https://apps.apple.com/us/app/imp-imp-box-controller/id1509443801",
    },
    thumbnail: "https://i.ibb.co/Xkpvwv2k/imp.png",
    domain: ["Telecommunications", "CallManagement", "MobileTechnology"],
  },
];

export { experiences, navLinks, projects, techStacks, tools };
