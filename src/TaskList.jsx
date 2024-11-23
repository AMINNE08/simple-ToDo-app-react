import  { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === editingTask.id ? { ...task, ...updatedTask } : task
      )
    );
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-list">
      <TaskForm onSave={editingTask ? editTask : addTask} editingTask={editingTask} />
      <div className="tasks">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onToggleComplete={toggleComplete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
