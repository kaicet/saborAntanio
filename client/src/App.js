import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu';
import Reserva from './Reserva';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para el menú */}
        <Route path="/" element={<Menu />} />
        {/* Ruta para la creación de reserva */}
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </Router>
  );
}

export default App;
