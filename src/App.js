import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [pokemen, setPokemen] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    let fetchPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemen(data.results);
        setNextPage(data.next);
      } catch (err) {
        console.log('Error loading initial pokemon: ', err);
      }
    };

    fetchPokemon();
  }, []);

  let loadMorePokemon = async () => {
    try {
      let { data } = await axios.get(nextPage);
      setPokemen((prevList) => [...prevList, ...data.results]);
      setNextPage(data.next);
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
