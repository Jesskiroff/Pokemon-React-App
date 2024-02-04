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

  let loadMorePokemon = async () => {
    try {
      let { data } = await axios.get(
        'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20'
      );
      console.log(data);
      console.log('new list of pokemn', [...pokemen, ...data.results]);
    } catch (err) {
      console.log('Error loading more pokemon,', err);
    }
  };

  return (
    <>
      <button onClick={() => loadMorePokemon}>Load More Pokemon</button>
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
