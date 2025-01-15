import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/slices/taskslice"; // Importing the action for adding tasks
import "../Styles/taskinput.css"

const TaskInput = () => {
  const [taskName, setTaskName] = useState(""); // Local state for task name
  const [priority, setPriority] = useState("Medium"); // Local state for task priority (default is Medium)
  const dispatch = useDispatch(); // Redux dispatch function

  const handleAdd = (e) => {
    e.preventDefault(); // Prevent form from submitting

    if (taskName.trim()) { // Only add task if name is not empty
      const newTask = {
        id: Date.now(), // Unique ID for the task (you can change this logic as needed)
        name: taskName.trim(), // Task name from input
        priority, // Task priority
      };

      dispatch(addTask(newTask)); // Dispatch the action to add the task
      setTaskName(""); // Clear input field
      setPriority("Medium"); // Reset priority to default value
    } else {
      alert("Please enter a task name.");
    }
  };

  return (
    <form onSubmit={handleAdd} className="task-input-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)} // Update task name state as user types
        placeholder="Enter task"
        required
      />
      
      {/* Priority selection dropdown */}
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)} // Update priority state when selected
        required
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
