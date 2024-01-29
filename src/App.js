import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const { pokemon, setPokemon } = useState([]);

  useEffect(() => {
    let fetchPokemon = () => {
      try {
        const { data } = axios.get('https://pokeapi.co/api/v2/pokemon');
      } catch (err) {
        console.log('Error: ', err);
      }
    };
  });


  return (
    <>
      <button>Load More Pokemon</button>
      <div>{/* iterate through pokemon array here*/}</div>
      {/*use this for routing and diff component 4 all pokemon*/}
    </>
  );
}

export default App;
