import React from "react";

const Home = () => {
  return (
    <div>
      <p>Submit Text message</p>
      <input type="text" />
      <button>Submit(button1)</button>
      <br></br>
      <p>Search Text message</p>
      <input type="search" />
      <button>Search(button2)</button>
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
        No Message Found
      </div>
      <br></br>
      <button>Clear All (Button3)</button>
      <br></br>
      <br></br>
      <button>Logout</button>
    </div>
  );
};

export default Home;
