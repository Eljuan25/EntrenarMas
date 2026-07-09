// src/data/routines.js

// ==================== IMPORTS (Solo los que ya tienes) ====================
import FlexionNormal from "../assets/FlexionNormal.png";
import FlexionDiamante from "../assets/FlexionDiamante.png";
import FlexionSilla from "../assets/FlexionSilla.png";
import FlexionInvertida from "../assets/FlexionInvertida.png";
import Sentadilla from "../assets/Sentadillas.png";
import Zancadas from "../assets/Zancadas.png";
import PuentedeGluteo from "../assets/PuentedeGluteo.png";
import EvalacionTalones from "../assets/EvalacionTalones.png";
import CurlBiceps from "../assets/CurlBiceps.jpg";
import Fondosilla from "../assets/FondosSillas.jpg";
import ExtensionesDetricep from "../assets/ExtensionesDetricep.jpg";
import Dominada from "../assets/Dominada.jpg";
import RemoAustraliano from "../assets/RemoAustraliano.jpg";
import ChinUps from "../assets/ChinUps.jpg";
import EvalacionRodillas from "../assets/EvaluacionDerodillas.jpeg";
import Correr from "../assets/Correrer.jpg";
import PressBanca from "../assets/PressBanca.jpg";



// import PressInclinado from "../assets/PressInclinado.jpg";
// import RemoBarra from "../assets/RemoBarra.jpg";
// import FacePull from "../assets/FacePull.jpg";
// import Jalones from "../assets/Jalones.jpg";
// import PrensaPiernas from "../assets/PrensaPiernas.jpg";
// import HipThrust from "../assets/HipThrust.jpg";

export const routines = [

  // ====================== LUNES - PECHO ======================
  {
    id: "lunes-pecho-casa",
    day: "Lunes",
    focus: "Pecho",
    type: "calistenia",
    gender: ["hombre", "mujer"],
    level: "principiante",
    exercises: [
      { name: "Flexiones Normales", sets: 4, reps: "12-15", rest: 60, notes: "Core apretado", image: FlexionNormal },
      { name: "Flexiones Diamante", sets: 4, reps: "10-12", rest: 75, image: FlexionDiamante },
      { name: "Flexiones en Silla", sets: 4, reps: "15", rest: 60, image: FlexionSilla },
      { name: "Flexiones Invertidas", sets: 3, reps: "12", rest: 90, image: FlexionInvertida }
    ]
  },
  {
    id: "lunes-pecho-gym-hombre",
    day: "Lunes",
    focus: "Pecho (Gym - Hombre)",
    type: "gym",
    gender: ["hombre"],
    level: "intermedio",
    exercises: [
      { name: "Press de Banca Plano", sets: 4, reps: "8-12", rest: 90, notes: "Controla la bajada" , image: PressBanca }, // image: PressBanca
      { name: "Press Inclinado con Mancuernas", sets: 4, reps: "10-12", rest: 75 }, // image: PressInclinado
      { name: "Aperturas con Mancuernas", sets: 3, reps: "12-15", rest: 60 },
      { name: "Fondos en Paralelas", sets: 3, reps: "8-12", rest: 90 }
    ]
  },

  // ====================== MARTES - PIERNAS ======================
// ====================== MARTES - PIERNAS ======================
{
  id: "martes-piernas-casa",
  day: "Martes",
  focus: "Piernas y Glúteos",
  type: "calistenia",
  gender: ["hombre", "mujer"],
  level: "principiante",
  exercises: [
    { name: "Sentadillas", sets: 4, reps: "15-20", rest: 90, image: Sentadilla },
    { name: "Zancadas Caminando", sets: 4, reps: "12 por pierna", rest: 75, image: Zancadas },
    { name: "Puente de Glúteos", sets: 4, reps: "20", rest: 60, image: PuentedeGluteo },
    { name: "Elevación de Talones", sets: 4, reps: "20", rest: 45, image: EvalacionTalones }
  ]
},

{
  id: "martes-piernas-gym-hombre",
  day: "Martes",
  focus: "Piernas y Glúteos (Gym - Hombre)",
  type: "gym",
  gender: ["hombre"],
  level: "intermedio",
  exercises: [
    { name: "Sentadillas con Barra", sets: 4, reps: "8-12", rest: 120 },
    { name: "Prensa de Piernas", sets: 4, reps: "10-15", rest: 90 },
    { name: "Zancadas con Mancuernas", sets: 3, reps: "12 por pierna", rest: 75 },
    { name: "Elevación de Talones en Máquina", sets: 4, reps: "15-20", rest: 60 },
    { name: "Curl de Piernas", sets: 3, reps: "12-15", rest: 75 }
  ]
},

{
  id: "martes-gluteos-gym-mujer",
  day: "Martes",
  focus: "Glúteos y Piernas (Gym - Mujer)",
  type: "gym",
  gender: ["mujer"],
  level: "intermedio",
  exercises: [
    { name: "Hip Thrust", sets: 4, reps: "12-15", rest: 90 },
    { name: "Sentadillas Sumo", sets: 4, reps: "12-15", rest: 75 },
    { name: "Zancadas Reversas", sets: 3, reps: "12 por pierna", rest: 60 },
    { name: "Prensa de Piernas", sets: 4, reps: "10-15", rest: 90 }
  ]
},

  // ====================== MIÉRCOLES - BRAZOS ======================
  {
    id: "miercoles-brazos-casa",
    day: "Miércoles",
    focus: "Bíceps y Tríceps",
    type: "calistenia",
    gender: ["hombre", "mujer"],
    level: "principiante",
    exercises: [
      { name: "Curl de Bíceps con Piedras", sets: 4, reps: "15", rest: 60, image: CurlBiceps },
      { name: "Fondos en Silla", sets: 4, reps: "12", rest: 75, image: Fondosilla },
      { name: "Extensiones de Tríceps", sets: 4, reps: "12", rest: 60, image: ExtensionesDetricep }
    ]
  },
    // ====================== MIÉRCOLES - BÍCEPS Y TRÍCEPS (GYM) ======================
    {
      id: "miercoles-brazos-gym-hombre",
      day: "Miércoles",
      focus: "Bíceps y Tríceps (Gym - Hombre)",
      type: "gym",
      gender: ["hombre"],
      level: "intermedio",
      exercises: [
        { name: "Curl de Bíceps con Barra", sets: 4, reps: "10-12", rest: 75 },
        { name: "Curl Martillo con Mancuernas", sets: 4, reps: "12", rest: 60 },
        { name: "Press Francés en Polea o Barra", sets: 4, reps: "10-12", rest: 75 },
        { name: "Fondos en Paralelas", sets: 3, reps: "8-12", rest: 90 },
        { name: "Extensiones de Tríceps en Polea", sets: 3, reps: "15", rest: 60 }
      ]
    },
    {
      id: "miercoles-brazos-gym-mujer",
      day: "Miércoles",
      focus: "Bíceps y Tríceps (Gym - Mujer)",
      type: "gym",
      gender: ["mujer"],
      level: "intermedio",
      exercises: [
        { name: "Curl de Bíceps con Mancuernas", sets: 4, reps: "12-15", rest: 60 },
        { name: "Curl Martillo", sets: 3, reps: "12-15", rest: 60 },
        { name: "Extensiones de Tríceps en Polea", sets: 4, reps: "15", rest: 60 },
        { name: "Fondos Asistidos en Máquina", sets: 3, reps: "12", rest: 75 },
        { name: "Curl Concentrado", sets: 3, reps: "12 por brazo", rest: 60 }
      ]
    },
  // ====================== JUEVES - ESPALDA ======================
  {
    id: "jueves-espalda-casa",
    day: "Jueves",
    focus: "Espalda y Core",
    type: "calistenia",
    gender: ["hombre", "mujer"],
    level: "principiante",
    exercises: [
      { name: "Dominadas", sets: 4, reps: "6-10", rest: 90, image: Dominada },
      { name: "Chin Ups", sets: 4, reps: "4-8", rest: 75, image: ChinUps },
      { name: "Remo Australiano", sets: 4, reps: "10-15", rest: 60, image: RemoAustraliano },
      { name: "Elevaciones de Rodillas", sets: 4, reps: "15", rest: 60, image: EvalacionRodillas }
    ]
  },
  {
    id: "jueves-espalda-gym-hombre",
    day: "Jueves",
    focus: "Espalda y Core (Gym - Hombre)",
    type: "gym",
    gender: ["hombre"],
    level: "intermedio",
    exercises: [
      { name: "Jalones al Pecho (Lat Pulldown)", sets: 4, reps: "10-12", rest: 90 },
      { name: "Remo con Barra", sets: 4, reps: "10-12", rest: 75 },
      { name: "Remo con Mancuerna", sets: 4, reps: "10 por lado", rest: 60 },
      { name: "Face Pull", sets: 3, reps: "15", rest: 60 },
      { name: "Plancha", sets: 3, reps: "45-60 seg", rest: 60 }
    ]
  },
  {
    id: "jueves-espalda-gym-mujer",
    day: "Jueves",
    focus: "Espalda y Core (Gym - Mujer)",
    type: "gym",
    gender: ["mujer"],
    level: "intermedio",
    exercises: [
      { name: "Jalones al Pecho (Lat Pulldown)", sets: 4, reps: "12-15", rest: 75 },
      { name: "Remo con Mancuerna", sets: 4, reps: "12 por lado", rest: 60 },
      { name: "Face Pull", sets: 3, reps: "15-20", rest: 60 },
      { name: "Superman en suelo", sets: 3, reps: "15", rest: 45 },
      { name: "Plancha", sets: 3, reps: "30-45 seg", rest: 60 }
    ]
  },

  // ====================== VIERNES - FULL BODY ======================
  {
    id: "viernes-fullbody-casa",
    day: "Viernes",
    focus: "Full Body",
    type: "calistenia",
    gender: ["hombre", "mujer"],
    level: "principiante",
    exercises: [
      { name: "Sentadillas", sets: 3, reps: "15", rest: 90, image: Sentadilla },
      { name: "Flexiones", sets: 3, reps: "12", rest: 60, image: FlexionNormal },
      { name: "Dominadas", sets: 3, reps: "6-10", rest: 90, image: Dominada },
      { name: "Correr", sets: 1, reps: "15-20 minutos", rest: 0, notes: "Cardio", image: Correr }
    ]
  },
  {
    id: "viernes-fullbody-gym-hombre",
    day: "Viernes",
    focus: "Full Body (Gym - Hombre)",
    type: "gym",
    gender: ["hombre"],
    level: "intermedio",
    exercises: [
      { name: "Sentadillas con Barra", sets: 4, reps: "8-12", rest: 120 },
      { name: "Press de Banca", sets: 4, reps: "8-12", rest: 90 },
      { name: "Remo con Barra", sets: 3, reps: "10", rest: 75 },
      { name: "Curl de Bíceps", sets: 3, reps: "12", rest: 60 },
      { name: "Extensiones de Tríceps", sets: 3, reps: "12", rest: 60 }
    ]
  },
  {
    id: "viernes-fullbody-gym-mujer",
    day: "Viernes",
    focus: "Full Body (Gym - Mujer)",
    type: "gym",
    gender: ["mujer"],
    level: "intermedio",
    exercises: [
      { name: "Sentadillas Sumo", sets: 4, reps: "12-15", rest: 90 },
      { name: "Press de Banca", sets: 3, reps: "10-12", rest: 75 },
      { name: "Remo con Mancuerna", sets: 3, reps: "12 por lado", rest: 60 },
      { name: "Curl de Bíceps con Mancuernas", sets: 3, reps: "12", rest: 60 },
      { name: "Hip Thrust", sets: 3, reps: "12", rest: 75 }
    ]
  }
];


export const getRoutineByDay = (day) => {
  return routines.filter(r => r.day === day);
};