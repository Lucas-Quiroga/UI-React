import React from "react";

export default function TaskItem({ task, onComplete, onDeleteItem }) {
  const getStyle = () => {
    return {
      textDecoration: task.completed ? "line-through" : "none",
      margin: "20px",
      border: "1px solid #fff",
      backgroundColor: "#ccf7e3",
    };
  };

  return (
    <div style={getStyle()}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onComplete(task.id)}
      />
      {task.task}
      <button className="add-btn" onClick={() => onDeleteItem(task.id)}>X</button>
    </div>
  );
}
