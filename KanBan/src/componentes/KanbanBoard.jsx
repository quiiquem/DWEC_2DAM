import TaskColumn from "./TaskColumn";
//importe para que pille las columnas con las tareas dentro y así este archivo las convierte en varias columnas con un titulo

function KanbanBoard({ columns }){
    const colus = columns.map((col) => (
        <TaskColumn key={col.id} title={col.title} tasks={col.tasks} />
        //simplemente pilla información del y va repartiendo la información que tiene dentro para guardarlos dentro de variables que necesita el taskColumn
    ));

    return (
        <div style={{ display: "flex", gap: "20px"}}>
            {colus}
        </div>
    );
}

export default KanbanBoard;