const colors = [
  "green",
  "red",
  "purple",
  "orange",
  "neutral",
  "yellow",
  "blue",
];

export const getRandomColor = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor];
};
