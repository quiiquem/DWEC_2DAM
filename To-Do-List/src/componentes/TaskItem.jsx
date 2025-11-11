function TaskItem({ index, onClick }) {
  return (
    <li>
      {index.text} 
      <button onClick={() => onClick(index.id)}>X</button> 
    </li>
  );
}

export default TaskItem; //exporta el componente
