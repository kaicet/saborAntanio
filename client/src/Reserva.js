import './Reserva.css';
import { useState } from "react";
import Axios from "axios";

function Reserva() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [celular, setCelular] = useState("");
  const [personas, setPersonas] = useState("");

  const addReserva = () => {
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      fecha: fecha,
      celular: celular,
      personas: personas,
    }).then(() => {
      alert("Reserva Creada.");
      setNombre("");
      setFecha("");
      setCelular("");
      setPersonas("");
    }).catch((error) => {
      console.error("Error al crear la reserva:", error);
    });
  };

  return (
    <div className="reserva-container">
      <h2>Reserva tu Mesa</h2>
      <p className="reserva-description">Por favor, completa el siguiente formulario para realizar tu reserva.</p>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={(e) => setNombre(e.target.value)}
          value={nombre}
          required
        />
      </div>

      <div className="form-group">
        <label>Fecha</label>
        <input
          type="date"
          onChange={(e) => setFecha(e.target.value)}
          value={fecha}
          required
        />
      </div>

      <div className="form-group">
        <label>Celular</label>
        <input
          type="text"
          placeholder="Ingresa tu celular"
          onChange={(e) => setCelular(e.target.value)}
          value={celular}
          required
        />
      </div>

      <div className="form-group">
        <label>Número de Personas</label>
        <input
          type="number"
          placeholder="Número de personas"
          onChange={(e) => setPersonas(e.target.value)}
          value={personas}
          min="1"
          required
        />
      </div>

      <button className="submit-btn" onClick={addReserva}>
        Crear Reserva
      </button>
    </div>
  );
}

export default Reserva;
