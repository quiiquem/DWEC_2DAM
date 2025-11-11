import React, { useState } from "react";  //importar usestate

function TaskForm({ onSubmit }) { // componente para el formulario de tareas
  const [index, setIndex] = useState(""); // estado para el valor del input

  const handleSubmit = (e) => { // función para manejar el envío del formulario
    e.preventDefault(); // evita recargar la página
    onSubmit(index); // pasa el valor al componente padre
    setIndex("");   // limpia el input
  };

  return (
    <form onSubmit={handleSubmit}> {/* controla el formulario para que siga funcionando en orden */}
      <input 
        type="text" 
        value={index} 
        onChange={(e) => setIndex(e.target.value)} // actualiza el estado al escribir
        placeholder="Inserta tu tarea aquí" 
        style={{
          textAlign: "center",
          borderRadius: "5px",
          border: "2px solid #13131fff",
          marginRight: "10px",
        }}
      />
      <button 
        type="submit" 
        style={{
          border: "2px solid #13131fff", 
          borderRadius: "6px"
        }}
      >
        Añadir {/* texto del botón */}
      </button>
    </form>
  );
}

export default TaskForm; // exporta el componente
