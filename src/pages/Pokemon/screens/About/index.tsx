import React, { useEffect, useState } from 'react';

import { SectionAbout, SectionAboutContent } from './styles';

import { PokemonProps } from '../../index';

import api from '../../../../services/api';

interface AboutProps {
  pokemon: PokemonProps;
}

interface SpecieProps {
  capture_rate: string;
  base_happiness: string;
  growth_rate: string;
}

const About: React.FC<AboutProps> = ({ pokemon }) => {
  const [pokemonSpecie, setPokemonSpecie] = useState<SpecieProps>(
    {} as SpecieProps,
  );

  useEffect(() => {
    if (pokemon.specie) {
      api.get(`/pokemon-species/${pokemon.specie}`).then(response => {
        const { capture_rate, base_happiness, growth_rate } = response.data;

        setPokemonSpecie({
          capture_rate,
          base_happiness,
          growth_rate: growth_rate.name.replace('-', ' '),
        });
      });
    }
  }, [pokemon]);

  return (
    <SectionAbout>     

      <SectionAboutContent>
        <div>
          <h3>My Pokemon Data</h3>
          <ul>
            <li>
              <strong>Espécie:</strong> <span>{pokemon.specie}</span>
            </li>
            <li>
              <strong>Altura:</strong> <span>{pokemon.height}</span>
            </li>
            <li>
              <strong>Peso:</strong> <span>{pokemon.weight}</span>
            </li>
          </ul>
        </div>
        <div>
          <h3>Treinamento</h3>

          <ul>
            <li>
              <strong>Taxa de captura:</strong>
              <span>{pokemonSpecie.capture_rate}</span>
            </li>
            <li>
              <strong>Amizade Base:</strong>
              <span>{pokemonSpecie.base_happiness}</span>
            </li>
            <li>
              <strong>Taxa de crescimento:</strong>
              <span>{pokemonSpecie.growth_rate}</span>
            </li>
          </ul>
        </div>
      </SectionAboutContent>
    </SectionAbout>
  );
};

export default About;
