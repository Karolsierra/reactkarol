import React from 'react';
import Swal from 'sweetalert2';

const AlertcrearTaller = () => {
  const handleClick = () => {
    Swal.fire({
      html: `
      <main class="workshop">
          <div class="workshop-container">
              <form id="workshopForm">
                  <div class="form-group">
                      <label for="nombre">Nombre del taller:</label>
                      <input type="text" id="nombre" name="nombre" required>
                  </div>
                  <div class="form-group">
                      <label for="tipoTaller">Tipo de taller:</label>
                      <select id="tipoTaller" name="tipoTaller" required>
                          <option value="">Seleccione una opción</option>
                          <option value="Cultura">Cultura</option>
                          <option value="Sexualidad">Sexualidad</option>
                          <option value="Psicologia">Psicologia</option>
                          <option value="Deportes">Deportes</option>
                          <option value="Cuidado">Cuidado</option>
                          <option value="Artes">Artes</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="recursos">Recursos del taller:</label>
                      <input type="text" id="recursos" name="recursos" required>
                  </div>
              </form>
          </div>
      </main>
      `,
      showConfirmButton: true,
      confirmButtonText: "Guardar",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value.trim();
        const tipoTaller = document.getElementById("tipoTaller").value.trim();
        const recursos = document.getElementById("recursos").value.trim();

        if (!nombre || !tipoTaller || !recursos) {
          Swal.showValidationMessage('Por favor completa todos los campos');
          return false;
        } else {
          return { nombre, tipoTaller, recursos };
        }
      }
    }).then(result => {
      if (result.isConfirmed) {
        console.log('Datos del taller:', result.value);
      }
    });
  };

  return (
    <div>
    <button onClick={handleClick}>Registrar Taller</button>
    </div>
);
};

export default AlertcrearTaller;
