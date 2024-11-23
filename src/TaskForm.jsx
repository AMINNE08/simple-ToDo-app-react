import { useState, useEffect } from "react";

const TaskForm = ({ onSave, editingTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskName(editingTask.name);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName || !description) {
      alert("Please fill in both fields.");
      return;
    }
    onSave({ name: taskName, description });
    setTaskName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{editingTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
