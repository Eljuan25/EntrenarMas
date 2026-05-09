// src/data/routines.js
import FlexionDiamante from "../assets/FlexionDiamante.png";
import FlexionNormal from "../assets/FlexionNormal.png";
import FlexionSilla from "../assets/FlexionSilla.png";
import FlexionInvertida from "../assets/FlexionInvertida.png";
import Sentadilla from "../assets/Sentadillas.png";
import Zancadas from "../assets/Zancadas.png";
import PuentedeGluteo from "../assets/PuentedeGluteo.png";
import EvalacionTalones from "../assets/EvalacionTalones.png";
import CurlBiceps from "../assets/CurlBiceps.jpg";
import MartilloPiedra from "../assets/MartilloPiedra.jpg";
import Fondosilla from "../assets/FondosSillas.jpg";
import ExtensionesDetricep from "../assets/ExtensionesDetricep.jpg";
import Dominada from "../assets/Dominada.jpg";
import RemoAustraliano from "../assets/RemoAustraliano.jpg";
import ChinUps from "../assets/ChinUps.jpg";
import EvalacionRodillas from "../assets/EvaluacionDerodillas.jpeg";
import Correr from "../assets/Correrer.jpg"




export const routines = [
  {
    day: "Lunes",
    focus: "Pecho",
    exercises: [
      { name: "Flexiones Normales", sets: 4, reps: "12-15", rest: 60, notes: "Core apretado", image: FlexionNormal },
      { name: "Flexiones Diamante", sets: 4, reps: "10-12", rest: 75, notes: "Enfocado en tríceps", image: FlexionDiamante },
      { name: "Flexiones Silla", sets: 4, reps: "15", rest: 60 , image: FlexionSilla},
      { name: "Flexiones Silla invertida", sets: 3, reps: "12", rest: 90, image: FlexionInvertida }
    ]
  },
  {
    day: "Martes",
    focus: "Piernas y Glúteos",
    exercises: [
      { name: "Sentadillas", sets: 4, reps: "15-20", rest: 90, image: Sentadilla },
      { name: "Zancadas", sets: 4, reps: "12 por pierna", rest: 75, image: Zancadas},
      { name: "Puente de Glúteos", sets: 4, reps: "20", rest: 60, image: PuentedeGluteo},
      { name: "Elevación de Talones", sets: 4, reps: "20", rest: 45, image: EvalacionTalones}
    ]
  },
  {
    day: "Miércoles",
    focus: "Bíceps y Tríceps",
    exercises: [
      { name: "Curl de Bíceps con Piedras", sets: 4, reps: "15", rest: 60, image: CurlBiceps},
      { name: "Fondos en Silla", sets: 4, reps: "12", rest: 75, notes: "Enfocado en tríceps", image: Fondosilla },
      { name: "Martillo con Piedras", sets: 3, reps: "15", rest: 60, image: MartilloPiedra },
      { name: "Extensiones de Tríceps", sets: 4, reps: "12", rest: 60, notes: "Sobre la cabeza",image: ExtensionesDetricep }
    ]
  },
  {
    day: "Jueves",
    focus: "Espalda y Core",
    exercises: [
      { name: "Dominada", sets: 4, reps: "6-12", rest: 60, image: Dominada },
      { name: "Chin Ups", sets: 4, reps: "4-10", rest: 75, image: ChinUps},
      { name: "Remo Australiano", sets: 4, reps: "10-15 ", rest: 60, image: RemoAustraliano },
      { name: "Elevaciones de Rodillas en Barra", sets: 4, reps: "15", rest: 60,image: EvalacionRodillas }
    ]
  },

  {
    day: "Viernes",
    focus: "Full Body",
    exercises: [

    {name: "Sentadillas", sets:3, reps: 15,rest:90, image: Sentadilla},
    {name: "Flexiones", sets:3, reps: 12,rest:60, image: FlexionNormal},
    {name: "Dominadas", sets:3, reps: 30,resto:90,image: Dominada},
    {name: "Correr", sets:60, reps: 15,resto:0,notes:"Cardio", image: Correr},

    
    ]

  }

];


export const getRoutineByDay = (day) => {
  return routines.find(r => r.day === day) || routines[0];
};