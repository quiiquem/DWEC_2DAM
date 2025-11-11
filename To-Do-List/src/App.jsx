import React, { useState } from "react"; // importa React y el hook useState

function App() {
  const [tasks, setTasks] = useState([]); // asi puedo guardar las tareas
  const [inputValue, setInputValue] = useState(""); // estado para el valor que pongamos en el input (escribir tarea)

  const addTask = (e) => { // funcion para crear tarea
    e.preventDefault(); // evita recargar la página al enviar la tarea (y que se borrara tmb)
    if (inputValue.trim() === "") return;
    const nuevaTarea = { // objeto de la tarea
      id: Date.now(), // el ID indica la fecha de ahora , haciendolo un ID unico por tarea 
      text: inputValue,
    };
    setTasks([...tasks, nuevaTarea]); // actualiza la lista con la nueva tarea 
    setInputValue(""); // quita lo que hayamos escrito y puesto
  };

  const deleteTask = (taskId) => { // función para eliminar una tarea
    setTasks(tasks.filter((task) => task.id !== taskId)); // filtra las tareas quitando la seleccionada pillando su id
  };

  return ( //la parte html
    <div style={{ textAlign: "center" }}> 
      <h1>Lista de tareas pendientes</h1> 
      <form onSubmit={addTask}> 
        <input
          type="text" 
          value={inputValue} // valor controlado por el estado
          onChange={(e) => setInputValue(e.target.value)} // actualiza el estado al escribir
          placeholder="Escribe la tarea aquí..."
          style={{ width: "300px", height: "40px" }}
        />
        <button
          type="submit" // botón para enviar el formulario
          style={{
            backgroundColor: "#0f5b86ff",
            color: "white",
            fontWeight: "bold",
            marginLeft: "20px",
            fontSize: "16px",
          }}
        >
          Enviar {}
        </button>
      </form>

      <ul style={{ listStyle: "none", padding: 0 }}> {/* lista de tareas */}
        {tasks.map((task) => ( // recorre las tareas
          <li key={task.id} style={{ marginTop: "10px" }}> {/* cada tarea */}
            {task.text} {/* muestra el texto de la tarea */}
            <button
              onClick={() => deleteTask(task.id)} // elimina la tarea al hacer clic
              style={{
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Eliminar {/* texto del botón */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App; // devuelve todo app
