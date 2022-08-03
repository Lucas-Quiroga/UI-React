import React, { useState } from "react";
import "./Login.css";
import firebaseApp from "../../Firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

const Login = () => {
  // estado que nos dice si el usuario se está registrando o no
  const [userRegistering, setUserRegistering] = useState(false);

  //agarra los datos de los inputs y actualiza el estado o para crear un usuario o para logear el usuario
  async function handleForm(e) {
    e.preventDefault();
    const email = e.target.formBasicEmail.value;
    const password = e.target.formBasicPassword.value;

    if (userRegistering) {
      //si se registra el usuario
      //const user = ...
      await createUserWithEmailAndPassword(auth, email, password);
    } else {
      //si logea el usuario
      signInWithEmailAndPassword(auth, email, password);
    }
  }

  return (
    <>
      <div className="login-box">
        <h1>{userRegistering ? "Register" : "login"}</h1>
        <form onSubmit={handleForm}>
          <div className="user-box">
            <input
              type="email"
              placeholder="Enter email"
              required=""
              name="formBasicEmail"
              id="formBasicEmail"
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              placeholder="Enter password"
              required=""
              name="formBasicPasswor"
              id="formBasicPassword"
            />
            <label>Password</label>
          </div>
          <button type="submit">
            {userRegistering ? "Register" : "login"}
          </button>
        </form>
        <button
          type="submit"
          // con la funcion llamamos al provedor que queres en este caso es google
          onClick={() => signInWithRedirect(auth, googleProvider)}
        >
          login with google
        </button>
        <button
          type="submit"
          onClick={() => setUserRegistering(!userRegistering)}
        >
          {userRegistering
            ? "already have an account? log in"
            : "don't have an account? register"}
        </button>
      </div>
    </>
  );
};

export default Login;
