import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // fetch('https://swapi.dev/api/people')
    //   .then((response) => response.json())
    //   .then((data) => setPersonajes(data.results));
    const obtenerPersonajes = async () => {
      const response = await fetch('https://swapi.dev/api/people');
      const data = await response.json();

      setPersonajes(data.results);
    };

    obtenerPersonajes();
  }, []);

  return (
    <div>
      <h1>Personajes de Startawrs</h1>
      <ul>
        {personajes.map((personaje, key) => {
          return <li key={key}>{personaje.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
