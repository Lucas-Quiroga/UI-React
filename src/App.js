import "./App.css";
import Landing from "./Components/Landing/Landing";
import React, { useState } from "react";
import Home from "./Components/Home/Home";
import firebaseApp from "./Firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  //estado que evalua el inicio de sesion
  const [userGlobal, setUserGlobal] = useState(null);

  //con esta funcion le decimos que hacer cuando detecte un cambio de sesión, que revise si inicio o si se cerro sesión
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      //si existe el usuario
      setUserGlobal(userFirebase);
    } else {
      //si no existe
      setUserGlobal(null);
    }
  });

  return (
    <div className="App">
      {/* lo que mostramos en el estado cuando se actualice el usuario*/}
      {userGlobal ? <Home correoUser={userGlobal.email} /> : <Landing />}
    </div>
  );
}

export default App;
