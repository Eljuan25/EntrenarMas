// src/utils/logic.js
export const calculateMultiplier = (weight, goal, level) => {
  let multiplier = 1.0;

  // Nivel
  if (level === "intermedio") multiplier += 0.25;
  if (level === "avanzado") multiplier += 0.5;

  // Objetivo
  if (goal === "musculo") multiplier += 0.3;
  if (goal === "fuerza") multiplier += 0.4;

  // Peso corporal (más peso = más dificultad en ejercicios de peso corporal)
  if (weight > 85) multiplier += 0.15;
  if (weight < 60) multiplier -= 0.1;

  return Math.max(0.8, Math.min(2.0, multiplier)); // límite razonable
};

// Nueva función: Sugerir progreso semanal
export const suggestProgress = (currentSets, week) => {
  if (week % 4 === 0) return Math.floor(currentSets * 1.1); // cada 4 semanas aumenta ~10%
  return currentSets;
};