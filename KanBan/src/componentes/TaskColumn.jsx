import TaskItem from "./TaskItem";

function TaskColumn({titulo, tareas}){
    const tareas = tasks.length === 0 ? (<p style={{color: "#6e6e6e", textAlign: "center"}}> Columna sin datos </p>) : (tareas.map((tareas) => <TaskItem key={tareas.id} {...tareas}></TaskItem>) )
    return (
        <div style={{
            backgroundColor: "#9e9e9eff",
            borderLeft: `7px solid`,
            borderRadius: "8px",
            marginBottom: "10px",
            padding: "10px",
            width: 200
        }}>
            <h3 style={{fontFamily: "sans-serif", textAlign: "center"}}>{titulo}</h3>
            {tareas}
        </div>
    );
} 

export default TaskColumn;
