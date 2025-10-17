function TaskItem({ title, priority, dueDate}){
    function getPriorityColor(priority){
        switch(priority){
            case "Urgente":
                return "#ff1100";
            case "Importante":
                return "#ffdd00";
            case "No prioritario":
                return "#26ff00";
            default:
                return "#ccc";
        }
    }
const borderColor = getPriorityColor(priority);

    return(
        <div style={{
            borderLeft: `10px solid ${borderColor}`,
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px"
        }}
        >
            <h4>{title}</h4>
            <p style={{ margin: 0, fontSize: "0.9em"}}>Prioridad: {priority}</p>
            <p style={{ margin: 0, fontSize: "0.8em"}}>Fecha límite: {dueDate}</p>
        </div>
    )
}
export default TaskItem;