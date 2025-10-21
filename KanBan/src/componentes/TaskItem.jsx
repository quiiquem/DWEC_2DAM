function TaskItem({ nombretarea, urgencia, fechalimite}){
    function getPriorityColor(priority){ //coge los valores de taskitem y dependiendo de la urgencia cogera un color u otro
        switch(priority){
            case "Urgente":
                return "#b90c00ff";
            case "Importante":
                return "#ff8800ff";
            case "No prioritario":
                return "#1bb400ff";
            default:
                return "#494949ff";
        }
    }
const borderColor = getPriorityColor(priority);

    return(
        <div style={{ //que lo devuelva con bordes y fondo blanco (estetica pura y dura)
            borderLeft: `10px solid ${borderColor}`,
            backgroundColor: "#fff",
            padding: "10px",
            borderRadius: "8px",
            marginBottom: "10px"
        }} //lo de abajo es como muestra la tarea
        >
            <h4>{nombretarea}</h4>
            <p style={{ margin: 0, fontSize: "0.9em"}}>Prioridad: {urgencia}</p>
            <p style={{ margin: 0, fontSize: "0.8em"}}>Fecha límite: {fechalimite}</p>
        </div>
    )
}
export default TaskItem;