import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleComplete } from "../Redux/slices/taskslice";
import "../Styles/tasklist.css";

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks || []); // Default to empty array if undefined

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="task-details">
              <p className="task-name">{task.name}</p>
              <span className={`task-priority ${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
            </div>
            <div className="task-actions">
              <button
                onClick={() => handleComplete(task.id)}
                className="complete-btn"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
