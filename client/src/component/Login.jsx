import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submitHandel = async(e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({email,password}),
      headers: {
        "Content-Type" :"application/json"
      }
    })
     const water = await response.json()
    // console.log('water', water);
    water.isMatchingCredential ? navigate("/Home") : alert("pls enter correct password")
  };

 

  return (
    <div>
      <form onSubmit={submitHandel}>
        <p>Email</p>
        <input
          type="email"
          name="email"
          placeholder="sample@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br></br>
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="password = 1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required

        />
        <br></br>
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
