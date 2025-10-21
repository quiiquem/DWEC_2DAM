import TaskColumn from "./TaskColumn";

function KanbanBoard({ columns }){
    const colus = columns.map((col) => (
        <TaskColumn key={col.id} title={col.titulo} tasks={col.tareas} />
    ));

    return (
        <div style={{ display: "flex", gap: "20px"}}>
            {colus}
        </div>
    );
}

export default KanbanBoard;