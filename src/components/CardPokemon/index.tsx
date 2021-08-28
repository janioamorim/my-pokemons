import React, { useState, SVGProps } from 'react';

import {
  Container, 
} from './styles';

interface PokemonTypesProps {
  name: string;
  color: string;
  icon: SVGProps<SVGSVGElement>;
}

interface PokemonProps {
  id: string;
  image: string;
  type: PokemonTypesProps[];
  backgroundColor: string;
}

const CardPokemon: React.FC<{ name: string }> = ({ name }) => {

  const [pokemon, setPokemon] = useState({} as PokemonProps);

  return (
    <Container to={`pokemon/${name}`}>
      <p>Card - {name}</p>
    </Container>
  );
};

export default CardPokemon;
