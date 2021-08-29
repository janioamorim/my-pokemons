import React, { useState, SVGProps, useEffect } from 'react';

import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  PokemonType,
  ContainerImg,
} from './styles';

import api from './../../services/api';
import iconTypePokemon from './../../assets/types';
import { useTheme } from 'styled-components';

interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

interface PokemonProps {
  id: string;
  image: string;
  type: PokemonTypesProps[];
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {
  const { colors } = useTheme();
  const [pokemon, setPokemon] = useState({} as PokemonProps);

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, types, sprites } = response.data;

      setPokemon({
        id,
        image: sprites.other['official-artwork'].front_default,
        type: types.map((pokemonType: any) => {
          const typeName = pokemonType.type
            .name as keyof typeof iconTypePokemon;

          return {
            name: typeName,
            icon: iconTypePokemon[typeName],
            color: colors.type[typeName],
          };
        }),
      });
    });
  }, [name, colors]);

  return (
    <Container to={`pokemon/${name}`}>
      <Pokemon>
        <PokemonNumber>Número: #{pokemon.id}</PokemonNumber>
        <PokemonName>{name}</PokemonName>
        {pokemon.type && (
          <div>
            {pokemon.type.map(pokemonType => (
              <PokemonType color={pokemonType.color} key={pokemonType.name}>
                <span>{pokemonType.name}</span>
              </PokemonType>
            ))}
          </div>
        )}
      </Pokemon>
      <ContainerImg>
        {pokemon.image && (
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
        )}
      </ContainerImg>
    </Container>
  );
};

export default CardPokemon;
