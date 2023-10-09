export const firstStringLetters = (strings: string[]): string => {
  return strings.reduce((prev, curr) => prev + curr[0], "");
};
