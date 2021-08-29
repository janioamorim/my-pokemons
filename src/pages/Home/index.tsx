import React, { useCallback, useEffect, useState } from 'react';
import { Container, Pokemons } from './styles';

import InputSearch from './../../components/InputSearch';
import CardPokemon from './../../components/CardPokemon';

import api from '../../services/api';

interface PokemonProps {
  id: string;
  name: string;
}

const Home: React.FC = () => {
  const NUMBER_POKEMONS = 9;
  const NUMBER_MAX_POKEMONS_API = 500;

  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    console.log('response', response);

    setPokemons(response.data.results);
  }, []);

  const handleMorePokemons = useCallback(
    async offset => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });

      setPokemons(state => [...state, ...response.data.results]);
      setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
    },
    [NUMBER_POKEMONS],
  );

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    const pokemonsSearch = response.data.results.filter(
      ({ name }: PokemonProps) => name.includes(pokemonSearch),
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) {
      handleSearchPokemons();
    } else {
      handlePokemonsListDefault();
    }
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  return (
    <Container>
      <h1>My Pokemons</h1>
      <InputSearch value={pokemonSearch} onChange={setPokemonSearch} />

      <Pokemons>
        {pokemons.map(pokemon => (
          <CardPokemon key={pokemon.name} name={pokemon.name} />
        ))}
      </Pokemons>

      {pokemonSearch.length <= 2 && (
        <button
          type="button"
          onClick={() => handleMorePokemons(pokemonsOffsetApi)}
        >
          MAIS
        </button>
      )}
    </Container>
  );
};

export default Home;
