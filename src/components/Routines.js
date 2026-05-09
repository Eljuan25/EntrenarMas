// src/components/Routines.js

import React, { useState } from "react";
import { routines, getRoutineByDay } from "../data/routines";
import { calculateMultiplier } from "../utils/logic";

function Routines({
  weight,
  height,
  goal,
  level,
  gender,
  week,
  setWeek
}) {
  const [day, setDay] = useState("Lunes");
  const [selectedImage, setSelectedImage] = useState(null);

  const routine = getRoutineByDay(day);
  const multiplier = calculateMultiplier(weight, goal, level);

  return (
    <div>
      {/* Selector de días */}
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

      {/* Rutina */}
      <div className="card routine">
        <h2>
          {routine.day} — {routine.focus}
        </h2>

        <p className="multiplier">
          Ajuste según tu perfil:{" "}
          <strong>x{multiplier.toFixed(1)}</strong>
        </p>

        {/* Ejercicios */}
        {routine.exercises.map((ex, index) => (
          <div key={index} className="exercise-card">

            {/* Imagen */}
            {ex.image && (
              <div
                className="exercise-image"
                onClick={() => setSelectedImage(ex.image)}
              >
                <img
                  src={ex.image}
                  alt={ex.name}
                  loading="lazy"
                />
              </div>
            )}

            {/* Información */}
            <div className="exercise-info">
              <h3>{ex.name}</h3>

              <p>
                <strong>
                {Math.ceil(ex.sets * multiplier)} series × {ex.reps}
                </strong>

                <br />

                Descanso: {ex.rest}s{" "}
                {ex.notes && `— ${ex.notes}`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Botón */}
      <button
        className="big-btn"
        onClick={() => setWeek((w) => w + 1)}
      >
        Completé esta semana → Semana {week + 1}
      </button>

      {/* Modal de imagen */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Ejercicio ampliado"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
}

export default Routines;