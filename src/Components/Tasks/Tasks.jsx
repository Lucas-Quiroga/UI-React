import React from "react";
import { useState } from "react";
import data from "../../data.json";
import TasksList from "./TasksList";
import TaskForm from "./TaskForm";

export default function Tasks() {
  const [tasks, setTasks] = useState(data);
  const onComplete = (id) => {
    console.log("task", id);

    setTasks(
      tasks.map((task) => {
        return task.id === Number(id)
          ? { ...task, completed: !task.completed }
          : { ...task };
      })
    );
  };

  const onDeleteItem = (id) => {
    //filtrando la lista de tareas
    setTasks([...tasks].filter((task) => task.id !== id));
  };

  const addTask = (newTask) => {
    console.log('newTask', newTask)
    let newItem = {id: +new Date(), task: newTask, completed: false}
    setTasks([...tasks, newItem])
  }

  return (
    <div className="container">
      <TaskForm addTask={addTask} />
      <TasksList
        tasks={tasks}
        onComplete={onComplete}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}
