import React from "react";
import api from "../services/api";
import { FiSearch } from "react-icons/fi";

export default function Input({ input, setInput, setCep }) {
  const handleSearch = async () => {
    if (input === "") {
      alert("Enter a zip code in the search field");
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);

      setInput("");
    } catch {
      alert(`Zip code not found`);
      setInput("");
    }
  };

  return (
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
  );
}
