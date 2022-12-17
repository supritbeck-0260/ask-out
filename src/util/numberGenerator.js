const min = 10;
const max = 90;

export const generateNumber = () =>
  Math.floor(Math.random() * (max - min + 1)) + min;
