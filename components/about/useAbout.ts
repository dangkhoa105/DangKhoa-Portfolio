"use client";

export const useAbout = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1998;
  const experienceTime = currentYear - 2021;

  return {
    age,
    experienceTime,
  };
};
