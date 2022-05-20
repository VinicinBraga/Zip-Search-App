import React, { useState } from "react";
import "./App.css";
import Main from "./components/main";
import Input from "./components/input";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  return (
    <div className="container">
      <h1 className="title">Zip Code Search</h1>
      <Input input={input} setInput={setInput} setCep={setCep} />
      {Object.keys(cep).length > 0 && <Main cep={cep} />}
    </div>
  );
}

export default App;
