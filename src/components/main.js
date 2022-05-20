import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Main({ cep }) {
  const handleClear = () => {
    document.location.reload(true);
  };

  return (
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
  );
}
