// src/utils/logic.js

export const calculateMultiplier = (
  weight,
  height,
  goal,
  level,
  gender
) => {

  let multiplier = 1.0;

  // Calcular IMC
  const imc = weight / ((height / 100) ** 2);

  // NIVEL
  if (level === "intermedio") {
    multiplier += 0.25;
  }

  if (level === "avanzado") {
    multiplier += 0.5;
  }

  // OBJETIVO
  if (goal === "musculo") {
    multiplier += 0.3;
  }

  if (goal === "fuerza") {
    multiplier += 0.4;
  }

  if (goal === "bajar_grasa") {
    multiplier += 0.2;
  }

  // PESO
  if (weight > 85) {
    multiplier += 0.15;
  }

  if (weight < 60) {
    multiplier -= 0.1;
  }

  // IMC
  if (imc >= 30) {
    multiplier -= 0.1;
  }

  if (imc <= 18) {
    multiplier -= 0.2;
  }

  // GÉNERO
  if (gender === "mujer") {
    multiplier -= 0.05;
  }

  if (gender === "hombre") {
    multiplier += 0.05;
  }

  // Límites de seguridad
  return Math.max(0.8, Math.min(2.0, multiplier));
};

// Progreso semanal
export const suggestProgress = (currentSets, week) => {

  // Cada 4 semanas aumenta 10%
  if (week % 4 === 0) {
    return Math.floor(currentSets * 1.1);
  }

  return currentSets;
};