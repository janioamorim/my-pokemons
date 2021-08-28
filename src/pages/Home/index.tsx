import React, { useCallback, useEffect, useState } from 'react';
import { Container, Pokemons } from './styles';

import { Pokeball } from './../../assets/patterns';
import InputSearch from './../../components/InputSearch';
import CardPokemon from './../../components/CardPokemon';

import api from '../../services/api';

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 9;

  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    console.log("response", response);
    
    setPokemons(response.data.results);
  }, []);

  useEffect(() => {
    handlePokemonsListDefault();
  }, [handlePokemonsListDefault]);

  return (
    <Container>
      <Pokeball />
      <h1>My Pokemons</h1>
      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />

      <Pokemons>
        {pokemons.map(pokemon => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </Pokemons>
    </Container>
  );
};

export default Home;
