import React, { useState, useEffect } from "react";

const VacanteList = () => {
  const [vacantes, setVacantes] = useState([]);
  const [ciudadanos, setCiudadanos] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5001/api/vacantes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setVacantes(data);
      })
      .catch((error) => {
        console.error("Error al obtener las vacantes:", error);
      });

    // Obtener la lista de ciudadanos
    fetch("https://localhost:5001/api/ciudadanos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setCiudadanos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los ciudadanos:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Listado de Vacantes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {vacantes?.map((vacante, index) => (
            <tr key={index}>
              <td>{vacante.id}</td>
              <td>{vacante.nombre}</td>
              <td>{vacante.descripcion}</td>
              <td>
                <select className="form-select">
                  <option value="" disabled selected>
                    Seleccione un ciudadano
                  </option>
                  {ciudadanos?.map((ciudadano, index) => (
                    <option key={index} value={ciudadano.id}>
                      {ciudadano.nombres} {ciudadano.apellidos}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VacanteList;
