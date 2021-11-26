import React from "react";
import "../css/Principal.css";


function Repositorio() {
  return (
   <>
     <div className="contenedor">
        
        <div>
          <div className="bienvenida">
            <p>REPOSITORIO</p>
            <h2>BIENVENIDO AL APARTADO </h2>
            <h2>PARA AÑADIR</h2>
            <h2>TUS TEMAS</h2>
          </div>
          <div className="texto">
            <p>El conocimiento es libre</p>
          </div>
          <button
              className="col-auto m-3 btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              Administrar
          </button>
        </div>
      </div>
    </>
  );
}
export default Repositorio;
