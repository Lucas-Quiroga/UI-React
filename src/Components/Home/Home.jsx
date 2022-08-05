import React, { useState, useEffect } from "react";
import Tasks from "../Tasks/Tasks";
import firebaseApp from "../../Firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import TasksList from "../Tasks/TasksList";
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const Home = ({ correoUser }) => {
  const [user, setUser] = useState({});
  // const [arrayTasks, setArrayTasks] = useState(null);
  // async function createOrSearchDocument(idDocument) {
  //   //crear referencia al document
  //   const docRef = doc(firestore, `users/${idDocument}`);
  //   //buscar documento
  //   const consult = await getDoc(docRef);
  //   //revisar si existe a travez de un método que nos devuelve el objeto
  //   if (consult.exists()) {
  //     //el método data() nose revela la información
  //     const infoDoc = consult.data();
  //     return infoDoc.tasks;
  //   } else {
  //     //si no existe creamos el documento
  //     await setDoc(docRef, { tasks: [...arrayTasks] });
  //     const consult = await getDoc(docRef);
  //     const infoDoc = consult.data();
  //     return infoDoc.tasks;
  //   }
  // }

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const tasksFetch = await createOrSearchDocument(correoUser);
  //     setArrayTasks(tasksFetch);
  //   }
  //   fetchTasks();
  // }, []);

  // const userDb = {
  //   userLogin: {
  //     email: correoUser
  //   }
  //   tasks:
  // }

  return (
    <div>
      <h4>Hola, iniciaste sesion</h4>
      {/* con el boton usamos la funcion para cerrar sesion */}
      <button onClick={() => signOut(auth)}>cerrar sesion</button>
      <Tasks />
    </div>
  );
};

export default Home;
