import React from "react";
// import { useNavigate } from "react-router-dom";

const login = () => {
    // const navigate = useNavigate()
  return (
    <div>
      <p>Email</p>
      <input type="email" />
      <br></br>
      <p>Password</p>
      <input type="password" />
      <br></br>
      <button>login</button>
    </div>
  );
};

export default login;
