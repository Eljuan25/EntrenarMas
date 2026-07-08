// src/components/Routines.js
import React, { useState } from "react";
import { getRoutineByDay } from "../data/routines";
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
  const [selectedType, setSelectedType] = useState("todos");

  console.log("Género recibido en Routines:", gender);

  let dayRoutines = getRoutineByDay(day);

  // ==================== FILTRO CORREGIDO ====================
  dayRoutines = dayRoutines.filter(routine => {
    const typeMatch = selectedType === "todos" || routine.type === selectedType;
    if (!typeMatch) return false;

    if (!gender) return true;

    const userGender = gender.toLowerCase().trim();

    if (routine.type === "calistenia") {
      return true; 
    } else {
      // Gym solo muestra según el género
      return Array.isArray(routine.gender) && routine.gender.includes(userGender);
    }
  });

  const multiplier = calculateMultiplier(weight, goal, level);

  return (
    <div>
      <h1>
        Rutinas para {gender === "hombre" ? "Hombre" : "Mujer"}
      </h1>

      <div className="day-selector">
        {["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"].map((d) => (
          <button
            key={d}
            className={day === d ? "active" : ""}
            onClick={() => setDay(d)}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="filters" style={{ margin: "20px 0" }}>
        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <option value="todos">Calistenia + Gym</option>
          <option value="calistenia">Solo Calistenia</option>
          <option value="gym">Solo Gym</option>
        </select>
      </div>

      {dayRoutines.length > 0 ? (
        dayRoutines.map((routine) => (
          <div key={routine.id} className="card routine" style={{ marginBottom: "30px" }}>
            <h2>{routine.day} — {routine.focus}</h2>
            
            <p className="multiplier">
              Ajuste según tu perfil: <strong>x{multiplier.toFixed(1)}</strong>
            </p>

            {routine.exercises.map((ex, index) => (
              <div key={index} className="exercise-card">
                {ex.image && (
                  <div className="exercise-image">
                    <img src={ex.image} alt={ex.name} />
                  </div>
                )}
                <div className="exercise-info">
                  <h3>{ex.name}</h3>
                  <p>
                    <strong>
                      {Math.ceil(ex.sets * multiplier)} series × {ex.reps}
                    </strong>
                    <br />
                    Descanso: {ex.rest}s {ex.notes && `— ${ex.notes}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))
      ) : (
        <div className="card">
          <p>No hay rutinas disponibles para tu género y filtros.</p>
          <p><small>Género detectado: {gender || "No definido"}</small></p>
        </div>
      )}

      <button className="big-btn" onClick={() => setWeek((w) => w + 1)}>
        Completé esta semana → Semana {week + 1}
      </button>
    </div>
  );
}

export default Routines;