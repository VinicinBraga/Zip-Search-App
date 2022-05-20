import React from "react";
import { RiCloseFill } from "react-icons/ri";

export default function Main({ cep }) {
  const handleClear = () => {
    document.location.reload(true);
  };

  return (
    <div className="mainBox">
      <button className="clearAll" onClick={handleClear}>
        close
        <RiCloseFill size={17} />
      </button>
      <main className="main">
        <h2>ZIP: {cep.cep}</h2>
        <span>
          {cep.logradouro} - n°: {cep.complemento}
        </span>
        <span>Bairro: {cep.bairro} </span>
        <span>
          Cidade: {cep.localidade} - {cep.uf}
        </span>
      </main>
    </div>
  );
}
