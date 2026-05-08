// src/pages/RoutinesPage.js
import React from "react";
import Routines from "../components/Routines";

function RoutinesPage({ profile, setWeek, week }) {
  return (
    <Routines 
      weight={profile.weight} 
      goal={profile.goal} 
      level={profile.level} 
      week={week} 
      setWeek={setWeek} 
    />
  );
}

export default RoutinesPage;