export type NavLink = {
  id: string;
  label?: string;
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

export { navLinks };
