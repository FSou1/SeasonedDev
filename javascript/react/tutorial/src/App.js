import { useState } from 'react';
import './App.css';
import Table from './Table.js';
import Form from './Form.js';

function App() {
  const [characters, setCharacters] = useState([]);

  function removeCharacter(index) {
    setCharacters(characters.filter((e, i) => i !== index));
  }

  function handleSubmit(character) {
    setCharacters([...characters, character]);
  }

  return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeCharacter} />

      <Form handleSubmit={handleSubmit} />
    </div>
  );
}

export default App;
