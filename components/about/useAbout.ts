export const useAbout = () => {
  const age = new Date().getFullYear() - 1998;
  const experienceTime = new Date().getFullYear() - 2021;

  return {
    age,
    experienceTime,
  };
};
