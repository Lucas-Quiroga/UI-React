import React, { useEffect, useState } from "react";
import "./Landing.css";
import Login from "../Login/Login";

const Landing = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="landing">
      <div className="landing_box">
        {login ? <h3>te logeaste </h3> : <h3>no te logeaste</h3>}
        <Login />
      </div>
    </div>
  );
};

export default Landing;
