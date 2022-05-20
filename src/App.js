import React, { useState } from "react";
import api from "./services/api";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  const handleSearch = async () => {
    if (input === "") {
      alert("Enter a zip code in the search field");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(cep);
      setInput("");
    } catch {
      alert(`Zip code not found`);
      setInput("");
    }
  };

  const handleClear = () => {
    document.location.reload(true);
  };

  return (
    <div className="container">
      <h1 className="title">Zip Code Search</h1>
      <div className="containerInput">
        <input
          type="text"
          placeholder="Type your zip code..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>
      {Object.keys(cep).length > 0 && (
        <main className="main">
          <h2>ZIP: {cep.cep}</h2>
          <span>
            {cep.logradouro} - n°: {cep.complemento}
          </span>
          <span>Bairro: {cep.bairro} </span>
          <span>
            Cidade: {cep.localidade} - {cep.uf}
          </span>
          <button className="clearAll" onClick={handleClear}>
            Clear
            <RiDeleteBinLine size={20} />
          </button>
        </main>
      )}
    </div>
  );
}

export default App;
