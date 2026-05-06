// src/components/Routines.js
import React, { useState } from "react";
import { routines, getRoutineByDay } from "../data/routines";
import { calculateMultiplier } from "../utils/logic";

function Routines({ weight, goal, level, week, setWeek }) {
  const [day, setDay] = useState("Lunes");

  const routine = getRoutineByDay(day);
  const multiplier = calculateMultiplier(weight, goal, level);

  return (
    <div>
      <div className="day-selector">
        {routines.map((r) => (
          <button
            key={r.day}
            className={day === r.day ? "active" : ""}
            onClick={() => setDay(r.day)}
          >
            {r.day}
          </button>
        ))}
      </div>

      <div className="card routine">
        <h2>{routine.day} — {routine.focus}</h2>
        <p className="multiplier">
          Ajuste según tu perfil: <strong>x{multiplier.toFixed(1)}</strong>
        </p>

        {routine.exercises.map((ex, i) => (
          <div key={i} className="exercise-card">
            {/* Imagen local (puedes agregar después) */}
            {ex.image && (
              <div className="exercise-image">
                <img 
                  src={ex.image} 
                  alt={ex.name} 
                  loading="lazy"
                />
              </div>
            )}

            <div className="exercise-info">
              <h3>{ex.name}</h3>
              <p>
                <strong>
                  {Math.round(ex.sets * multiplier)} series × {ex.reps}
                </strong><br />
                Descanso: {ex.rest}s {ex.notes && `— ${ex.notes}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="big-btn" onClick={() => setWeek(w => w + 1)}>
        Completé esta semana → Semana {week + 1}
      </button>
    </div>
  );
}

export default Routines;