// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import RoutinesPage from "./pages/RoutinesPage";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [profile, setProfile] = useState({
    weight: 70,
    height: 170,
    bodyFat: 18,
    goal: "musculo",
    level: "principiante",
  });

  const [week, setWeek] = useState(1);

  // Guardar en localStorage
  useEffect(() => {
    const saved = localStorage.getItem("entrenamas_profile");
    if (saved) setProfile(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("entrenamas_profile", JSON.stringify(profile));
  }, [profile]);
  return (
      <Router>
        <div className="app-container">
          <Header />

          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/perfil" replace />} />
              <Route 
                path="/perfil" 
                element={<Profile profile={profile} setProfile={setProfile} />} 
              />
              <Route 
                path="/rutinas" 
                element={<RoutinesPage profile={profile} week={week} setWeek={setWeek} />} 
              />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
  );
}

export default App;