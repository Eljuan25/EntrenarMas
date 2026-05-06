export const calculateMultiplier = (weight, goal, level) => {
  let multiplier = 1;

  // Nivel
  if (level === "intermedio") {
    multiplier += 0.3;
  }

  // Objetivo
  if (goal === "musculo") {
    multiplier += 0.3;
  }

  // Peso
  if (weight > 80) {
    multiplier += 0.2;
  }

  return multiplier;
};