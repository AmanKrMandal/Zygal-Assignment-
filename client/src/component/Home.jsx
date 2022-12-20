import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [submit, setSubmit] = useState("");
  const [search, setSearch] = useState("");
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const submitSave = async (e) => {
    console.log("fddddddd", submit);
    e.preventDefault();
    let response = await fetch("http://localhost:4000/message", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ message: submit }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    setSubmit("")
  };

  const logoutProfile = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:4000/logout");
    response = await response.json();
    console.log("response", response.status);
    response.status ? navigate("/") : alert("Try again");
  };

  const clearProfile = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:4000/clear", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    await response.json();
    setText("")
  };

  const searchData = async (e) => {
    e.preventDefault();
    let response = await fetch(`http://localhost:4000/message?text=${search}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const textData = await response.json();
    setText(textData.text);
    setSearch("")
  };

  return (
    <div>
      <p>Submit Text message</p>
      <input
        type="text"
        name="email"
        value={submit}
        onChange={(e) => setSubmit(e.target.value)}
        required
      />
      <button onClick={submitSave}>Submit(button1)</button>
      <br></br>
      <p>Search Text message</p>
      <input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button onClick={searchData}>Search(button2)</button>
      <br></br>
      <p>Show searched text message here</p>
      <div
        style={{
          height: "150px",
          border: "1px solid",
          width: "30%",
          marginLeft: "35%",
        }}
      >
        {text && text}
      </div>
      <br></br>
      <button onClick={clearProfile}>Clear All (Button3)</button>
      <br></br>
      <br></br>
      <button onClick={logoutProfile}>Logout</button>
    </div>
  );
};

export default Home;
