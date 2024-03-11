import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import InputMask from 'react-input-mask';
import api from './services/api';
import './styles.css';

function App() {
  const [input, setInput] = useState('');
  const [cep, setCep] = useState('');

  async function handleSearch() {
    if (input === '') {
      alert('Preencha algum cep!');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      console.log(response.data);
      setCep(response.data);
      setInput('');
    } catch {
      alert('Erro ao buscar');
      setInput('');
    }
  }

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Buscador CEP</h1>
        <div className="containerInput">
          <InputMask
            mask="99999-999"
            placeholder="Digite seu cep..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color="FFF" />
          </button>
        </div>

        {Object.keys(cep).length > 0 && (
          <main className="main">
            <h2>CEP: {cep.cep}</h2>
            {cep.logradouro && <span>{cep.logradouro}</span>}
            {cep.complemento && <span>{cep.complemento}</span>}
            {cep.bairro && <span>{cep.bairro}</span>}
            <span>
              {cep.localidade} - {cep.uf}
            </span>
          </main>
        )}
      </div>
    </div>
  );
}

export default App;
