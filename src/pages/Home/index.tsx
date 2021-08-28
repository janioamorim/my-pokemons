import React, { useState } from 'react';
import { Container } from './styles';

import { Pokeball } from './../../assets/patterns';
import InputSearch from './../../components/InputSearch';


const Home: React.FC = () => {

  const [pokemonSearch, setPokemonSearch] = useState('');

  return (
    <Container>
      <Pokeball />
      <h1>My Pokemons</h1>
      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />  
    </Container>
  );
};

export default Home;
