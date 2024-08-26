import React, { useState } from 'react';
import './styles/calendario.css'; // Asegúrate de que la ruta sea correcta

function Calendariomain() {
  const [calendarVisible, setCalendarVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setCalendarVisible(true);
  };

  return (
    <main>
      <div className="form-container">
        <h2 className="titulo">Seleccione Ficha y Coordinación</h2>
        <form id="selection-form" onSubmit={handleSubmit}>
          <label className="ingresar-datos" htmlFor="ficha">Ficha:</label>
          <input className="ingresar-datos2" type="text" id="ficha" name="ficha" required />
          <label className="ingresar-datos" htmlFor="coordinacion">Coordinación:</label>
          <input className="ingresar-datos2" type="text" id="coordinacion" name="coordinacion" required />
          <button className="boton" type="submit">Mostrar Calendario</button>
        </form>
      </div>
      {calendarVisible && (
        <div className="calendar-container" id="calendar-container">
          {/* El calendario se generará aquí */}
          <div className="calendar-grid">
            {/* Aquí deberías generar dinámicamente los días del calendario */}
            {Array.from({ length: 30 }).map((_, index) => (
              <div key={index} className={`calendar-day ${index % 5 === 0 ? 'event' : ''}`}>
                {index + 1}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Calendariomain;
