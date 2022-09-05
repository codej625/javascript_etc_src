// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//============================================================================
function App() {
  const [pokemon, setPokemon] = useState('');
  //==========================================================================
  useEffect(() => {
    const getDatas = async () => {
      const datas = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
      setPokemon(datas.data);
    };
    getDatas();
  }, []);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
