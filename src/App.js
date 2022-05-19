import { FiSearch } from "react-icons/fi";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">Zip Code Search</h1>
      <div className="containerInput">
        <input type="text" placeholder="Type your zip code..." />
        <button className="buttonSearch">
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>Cep: 94949498</h2>

        <span>Rua: teste </span>
        <span>Complemento: teste </span>
        <span>Bairro: teste </span>
        <span>Cidade: teste </span>
      </main>
    </div>
  );
}

export default App;
