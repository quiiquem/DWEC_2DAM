import KanbanBoard from "./componentes/KanbanBoard";

// El import para Kanban y luego el array con los datos, lo podíamos hacer en otro archivo para que quede más limpio

const initialBoardData = [
  {
    id: "c1",
    title: "Por Hacer",
    tasks: [
      {
        id: "t1",
        title: "Diseñar logo",
        priority: "Alta",
        dueDate: "2025-10-10",
      },
      {
        id: "t2",
        title: "Escribir contenido web",
        priority: "Media",
        dueDate: "2025-10-15",
      },
    ],
  },
  {
    id: "c2",
    title: "En Progreso",
    tasks: [
      {
        id: "t3",
        title: "Configurar servidor",
        priority: "Alta",
        dueDate: "2025-10-08",
      },
    ],
  },
  {
    id: "c3",
    title: "Completado",
    tasks: [], // ¡Aquí puedes probar el renderizado condicional de "Columna vacía"!
  },
];

// La función para que se conecte a kanboard con los datos definidos anteriormente

function App(){
  return(
  <div style={{ padding: "40px"}}>
    <h1>Tablero</h1>
    <KanbanBoard columns={initialBoardData} />
  </div>);
}

export default App;

//Para que funcione 