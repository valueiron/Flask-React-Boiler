import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [currentTime, updateTime] = useState("");
  const getTime = () => {
    let time = fetch("http://localhost:5000/api")
      .then((response) => response.text())
      .then((data) => updateTime(data) && console.log(date)).catch(console.log("Failed to return promise"));
  };

  return (
    <div className="react">
      <p>time:{currentTime}</p>
      <button onClick={getTime}>Click</button>
    </div>
  );
};

export default App;
