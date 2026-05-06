// src/components/Header.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigate("/")}>
           EntrenaMás
        </div>
        
        <nav className="nav">
          <button 
            className={location.pathname === "/perfil" ? "active" : ""}
            onClick={() => navigate("/perfil")}
          >
            Perfil
          </button>
          <button 
            className={location.pathname === "/rutinas" ? "active" : ""}
            onClick={() => navigate("/rutinas")}
          >
            Rutinas
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;