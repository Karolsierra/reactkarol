// src/components/AlertInforme.js
import React from 'react';
import Swal from 'sweetalert2';

const AlertInforme = () => {

  const showReportAlert = () => {
    const informeData = {
      programName: "Programación Taller de Deporte",
      workshopType: "Deportes",
      workshopDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt, asperiores iusto nesciunt delectus nemo, porro esse adipisci suscipit repellendus at ipsum accusantium. Vel accusamus molestiae omnis nihil aspernatur iste!',
      date: "2023-05-12",
      time: "10:00 AM",
      specialty: "Tele - informatica",
      trainers: ["Juan Pérez", "María López"],
      locations: ["Sede Central", "Sede Norte"],
      duration: "4 horas",
    };

    const trainersList = informeData.trainers.join(", ");
    const locationsList = informeData.locations.join(", ");

    Swal.fire({
      title: "Informe de Taller",
      html: `
        <div class="report-container">
          <div class="report-header">
            <h2>${informeData.programName}</h2>
          </div>
          <div class="report-content">
            <p><strong>Tipo de taller:</strong> </br> ${informeData.workshopType}</p>
            <p><strong>Descripción:</strong> </br> ${informeData.workshopDescription}</p>
            <p><strong>Fecha y hora del taller:</strong> </br> ${informeData.date} a las ${informeData.time}</p>
            <p><strong>Especialidad:</strong> </br> ${informeData.specialty}</p>
            <p><strong>Capacitador(es):</strong> </br> ${trainersList}</p>
            <p><strong>Sede(s):</strong> </br> ${locationsList}</p>
            <p><strong>Duración estimada:</strong> </br> ${informeData.duration}</p>
          </div>
          <div class="report-footer">
            <p>Hecho por Bienestar al Aprendiz</p>
          </div>
          <button class="download-button" onclick="downloadReport()">
            <i class="fa fa-download"></i> Descargar
          </button>
        </div>
      `,
      showConfirmButton: false,
    });
  };

  const downloadReport = () => {
    alert("Descargar informe no está implementado aún.");
  };

  return (
    <button onClick={showReportAlert}>
      Ver Informe
    </button>
  );
};

export default AlertInforme;
