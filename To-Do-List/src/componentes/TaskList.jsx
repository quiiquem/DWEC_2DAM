function TaskList({ tasks, onClick }) { // recibe la lista de tareas y la función onClick
  return (
    <ul>
      {tasks.map((task) => ( // recorre las tareas
        <TaskItem key={task.id} task={task} onClick={onClick} /> // renderiza cada tarea
      ))}
    </ul>
  );
}

export default TaskList; // exporta el componente
