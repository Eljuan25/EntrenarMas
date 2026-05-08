import React from 'react';

function Loading({ message = "Cargando tu rutina..." }) {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <p>{message}</p>
    </div>
  );
}

export default Loading;