
const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Active" : "Mark Complete"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
