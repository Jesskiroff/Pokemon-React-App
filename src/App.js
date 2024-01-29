import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const { pokemen, setPokemen } = useState([]);

  useEffect(() => {
    let fetchPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemen(data.results);
      } catch (err) {
        console.log('Error: ', err);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <button>Load More Pokemon</button>
      <div>
        {pokemen.map((pokemon) => {
          return (
            <div key={pokemon.name}>
              <h3>Name: {pokemon.name}</h3>
              <p>{pokemon.url}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
