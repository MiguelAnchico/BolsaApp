import React, { useState } from "react";
import axios from "axios";

const CiudadanoFormulario = () => {
  const [formData, setFormData] = useState({
    tipoDocumento: "",
    cedula: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    profesion: "",
    aspiracionSalarial: "",
    correoElectronico: "",
  });

  const tiposDocumento = [
    "Cédula de Ciudadanía",
    "Cédula de Extranjería",
    "Pasaporte",
    "Otro",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Envío de datos al servidor
      const response = await axios.post("/api/Ciudadanos", formData);
      console.log("Ciudadano creado exitosamente:", response.data);
    } catch (error) {
      console.error("Error al crear el ciudadano:", error);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <form onSubmit={handleSubmit} className="col-8">
        <div className="mb-3">
          <label className="form-label">Tipo de Documento</label>
          <select
            className="form-select"
            name="tipoDocumento"
            onChange={handleChange}
            defaultValue=""
            required
          >
            <option value="" disabled>
              Seleccione un tipo
            </option>
            {tiposDocumento.map((tipo, index) => (
              <option key={index} value={tipo}>
                {tipo}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Cédula</label>
          <input
            type="text"
            className="form-control"
            name="cedula"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Nombres</label>
          <input
            type="text"
            className="form-control"
            name="nombres"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Apellidos</label>
          <input
            type="text"
            className="form-control"
            name="apellidos"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            name="fechaNacimiento"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profesión</label>
          <input
            type="text"
            className="form-control"
            name="profesion"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Aspiración Salarial</label>
          <input
            type="number"
            className="form-control"
            name="aspiracionSalarial"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            name="correoElectronico"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default CiudadanoFormulario;
