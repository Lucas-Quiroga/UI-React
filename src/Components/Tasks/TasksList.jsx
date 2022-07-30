import React from "react";
import TaskItem from "./TaskItem";

export default function TasksList({ tasks, onComplete, onDeleteItem }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem key={`task-${index}`} 
          task={task} 
          onComplete={onComplete}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
}
