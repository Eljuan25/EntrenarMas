// src/data/routines.js
export const routines = [
  {
    day: "Lunes",
    focus: "Pecho",
    exercises: [
      { name: "Flexiones Normales", sets: 4, reps: "12-15", rest: 60, notes: "Core apretado", image: "" },
      { name: "Flexiones Diamante", sets: 4, reps: "10-12", rest: 75, notes: "Enfocado en tríceps" },
      { name: "Aperturas con Botellas", sets: 4, reps: "15", rest: 60 },
      { name: "Fondos en Silla", sets: 3, reps: "12", rest: 90 }
    ]
  },
  {
    day: "Martes",
    focus: "Piernas y Glúteos",
    exercises: [
      { name: "Sentadillas", sets: 4, reps: "15-20", rest: 90 },
      { name: "Zancadas", sets: 4, reps: "12 por pierna", rest: 75 },
      { name: "Puente de Glúteos", sets: 4, reps: "20", rest: 60 },
      { name: "Elevación de Talones", sets: 4, reps: "20", rest: 45 }
    ]
  },
  {
    day: "Miércoles",
    focus: "Bíceps y Tríceps",
    exercises: [
      { name: "Curl de Bíceps con Botellas", sets: 4, reps: "15", rest: 60 },
      { name: "Fondos en Silla", sets: 4, reps: "12", rest: 75, notes: "Enfocado en tríceps" },
      { name: "Martillo con Botellas", sets: 3, reps: "15", rest: 60 },
      { name: "Extensiones de Tríceps", sets: 4, reps: "12", rest: 60, notes: "Sobre la cabeza" }
    ]
  },
  {
    day: "Jueves",
    focus: "Espalda y Core",
    exercises: [
      { name: "Superman", sets: 4, reps: "15", rest: 60 },
      { name: "Remo con Mochila", sets: 4, reps: "12", rest: 75 },
      { name: "Plancha", sets: 4, reps: "45-60 seg", rest: 60 },
      { name: "Mountain Climbers", sets: 4, reps: "40", rest: 60 }
    ]
  }
];

export const getRoutineByDay = (day) => {
  return routines.find(r => r.day === day) || routines[0];
};