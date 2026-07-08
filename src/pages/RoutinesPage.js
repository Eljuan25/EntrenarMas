// src/pages/RoutinesPage.js
import React from "react";
import Routines from "../components/Routines";

function RoutinesPage({ profile, week, setWeek }) {
  if (!profile) {
    return <div className="card">Cargando perfil...</div>;
  }

  const { weight, height, goal, level, gender = "hombre" } = profile;

  return (
    <Routines
      weight={weight}
      height={height}
      goal={goal}
      level={level}
      gender={gender}
      week={week}
      setWeek={setWeek}
    />
  );
}

export default RoutinesPage;