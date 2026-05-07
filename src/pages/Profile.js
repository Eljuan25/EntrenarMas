// src/pages/Profile.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile({ profile, setProfile }) {
  const navigate = useNavigate();

  const { weight, height, bodyFat, goal, level } = profile;

  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { text: "Bajo peso", color: "#ffc107" };
    if (bmi < 25) return { text: "Normal", color: "#4caf50" };
    if (bmi < 30) return { text: "Muy pasado de peso", color: "#ff9800" };
    return { text: "Obesidad", color: "#f44336" };
  };

  const category = getBMICategory(bmi);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: name === "goal" || name === "level" ? value : Number(value) }));
  };

  return (
    <div className="card profile">
      <h2>Tu Perfil</h2>

      <label>Peso (kg):
        <input type="number" name="weight" value={weight} onChange={handleChange} />
      </label>

      <label>Altura (cm):
        <input type="number" name="height" value={height} onChange={handleChange} />
      </label>

      <label>Grasa Corporal (%):
        <input type="number" name="bodyFat" value={bodyFat} onChange={handleChange} />
      </label>

      <label>Objetivo:
        <select name="goal" value={goal} onChange={handleChange}>
          <option value="bajar">Bajar grasa</option>
          <option value="musculo">Ganar músculo</option>
          <option value="fuerza">Ganar fuerza</option>
        </select>
      </label>

      <label>Nivel:
        <select name="level" value={level} onChange={handleChange}>
          <option value="principiante">Principiante</option>
          <option value="intermedio">Intermedio</option>
          <option value="avanzado">Avanzado</option>
        </select>
      </label>

      <div className="stats">
        <p><strong>IMC:</strong> {bmi} — <span style={{ color: category.color }}>{category.text}</span></p>
        <p><strong>Grasa Corporal:</strong> {bodyFat}%</p>
      </div>

      <button className="big-btn" onClick={() => navigate("/rutinas")}>
        Ver Mis Rutinas →
      </button>
    </div>
  );
}

export default Profile;