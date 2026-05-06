import React, { useState } from "react";
import { routines } from "./data/routines";
import "./index.css";
import { calculateMultiplier } from "./utils/logic";

function App() {
  const [day, setDay] = useState("Lunes");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [goal, setGoal] = useState("bajar");
  const [level, setLevel] = useState("principiante");

  const routine = routines.find(r => r.day === day);

  const multiplier = calculateMultiplier(weight, goal, level);

  return (
    <div className="app">
      <h1 className="title"> EntrenaMas</h1>

      {/* CONFIG */}
      <div className="card">
        <h2>Configura tu rutina</h2>

        <input
          placeholder="Peso (kg)"
          onChange={(e) => setWeight(e.target.value)}
        />

        <input
          placeholder="Altura (cm)"
          onChange={(e) => setHeight(e.target.value)}
        />

        <select onChange={(e) => setGoal(e.target.value)}>
          <option value="bajar">Bajar grasa</option>
          <option value="musculo">Ganar músculo</option>
        </select>

        <select onChange={(e) => setLevel(e.target.value)}>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
        </select>
       <button className="btn">Generar rutina</button>
      </div>

      {/* SELECT DAY */}
      <select onChange={(e) => setDay(e.target.value)}>
        {routines.map((r, i) => (
          <option key={i}>{r.day}</option>
        ))}
      </select>

      {/* RUTINA */}
      <div className="card">
        <h2>{routine.day}</h2>

        {routine.exercises.map((ex, i) => (
          <p key={i}>
             {ex.name} — {Math.round(ex.sets * multiplier)} x {Math.round(ex.reps * multiplier)}
          </p>
        ))}
          

      </div>
    </div>
  );
}

export default App;