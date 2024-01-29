import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const { pokemen, setPokemen } = useState([]);

  useEffect(() => {
    let fetchPokemon = async () => {
      try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setPokemen(data.results)
        console.log(pokemen);
      } catch (err) {
        console.log('Error: ', err);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <button>Load More Pokemon</button>
      <div>{/* iterate through pokemon array here*/}</div>
      {/*use this for routing and diff component 4 all pokemon*/}
    </>
  );
}

export default App;
