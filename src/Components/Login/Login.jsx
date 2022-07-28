import React, { useEffect, useState } from "react";
import "./Login.css";

const Login = () => {
  const [userLogin, setUserLogin] = useState({});

  const handle_form = () => {
    alert("te estas logeando");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserLogin((values) => ({ ...values, [name]: value }));
  };

  console.log(userLogin);
  return (
    <>
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handle_form}>
          <div className="user-box">
            <input
              type="text"
              name="username"
              required=""
              onChange={handleChange}
              value={userLogin.username || ""}
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              required=""
              onChange={handleChange}
              value={userLogin.password || ""}
            />
            <label>Password</label>
          </div>
          <a href="#" onClick={handle_form}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default Login;
