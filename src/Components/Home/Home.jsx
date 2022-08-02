import React from "react";

import firebaseApp from "../../Firebase/config";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);

const Home = () => {
  return (
    <div>
      <h4>Hola, iniciaste sesion</h4>
      <button onClick={() => signOut(auth)}>cerrar sesion</button>
    </div>
  );
};

export default Home;
