import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";

export default function TaskForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleOnChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      addTask(userInput);
      setUserInput("");
    }
  };

  const tasksUser = {
    Usuario: {
      email: "hola@gmail.com",
    },
    tasks: userInput,
  };

  const handleClick = () => {
    const db = getFirestore();
    const userTasks = collection(db, "user");
    addDoc(userTasks, tasksUser).then(({ id }) => console.log(id));
  };

  return (
    <div style={{ margin: 20 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userInput} onChange={handleOnChange} />
        <button style={{ float: "right" }} onClick={handleClick}>
          Add task
        </button>
      </form>
    </div>
  );
}
