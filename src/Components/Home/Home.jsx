import React from "react";
import Tasks from "../Tasks/Tasks";
import firebaseApp from "../../Firebase/config";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

const Home = () => {
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
