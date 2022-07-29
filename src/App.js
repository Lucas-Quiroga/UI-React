import "./App.css";
import Landing from "./Components/Landing/Landing";
import RegisterUser from "./Components/Register/Register";
import { useUser } from "react-fire";

function App() {
  const user = useUser();
  return (
    <div className="App">
      {user && <p>Usuario: {user.email}</p>}
      <Landing />
      <RegisterUser />
    </div>
  );
}

export default App;
