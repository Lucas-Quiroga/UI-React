import { async } from "@firebase/util";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useFirebaseApp, UseUser } from "reactfire";

const Register = ({ props }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const firebase = useFirebaseApp();
  const { data: user } = UseUser();

  const submit = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const logout = async () => {
    await firebase.auth().signOut();
  };

  //   const handleEventEmail = (e) => {
  //     setEmail(e.target.value);
  //   };

  //   const handleEventPassword = (e) => {
  //     setPassword(e.target.value);
  //   };

  return (
    <div>
      {!user && (
        <div className="form_box">
          <form action="" className="form__form">
            <label htmlFor="email">Correo electronico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={submit}>crear cuenta</button>
          </form>
        </div>
      )}
      {user && <button onClick={logout}>cerrar sesión</button>}
    </div>
  );
};

export default Register;
