import "./App.css";
import Landing from "./Components/Landing/Landing";
// import RegisterUser from "./Components/Register/Register";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import firebaseApp from "./Firebase/config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(firebaseApp);

function App() {
  const [userGlobal, setUserGlobal] = useState(null);

  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUserGlobal(userFirebase);
    } else {
      setUserGlobal(null);
    }
  });

  return (
    <div className="App">
      {userGlobal ? <Home /> : <Landing />}

      {/* <RegisterUser /> */}
    </div>
  );
}

export default App;
