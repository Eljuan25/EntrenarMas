// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">¡EntrenaMás!</h1>
        <p className="hero-subtitle">Ponle ganas y ponte fuerte </p>
        
        <button 
          className="start-btn"
          onClick={() => navigate('/perfil')}
        >
          VAMOS A ENTRENAR 
        </button>
      </div>
    </div>
  );
}

export default Home;