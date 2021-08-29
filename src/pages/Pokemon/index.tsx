import React, { useState, SVGProps, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  Voltar,
  Content,
  ContainerImage,
  SectionsName,
  SectionsNameButton,
  ContentSection,
  TitleName
} from './styles';
import { FaChevronLeft } from 'react-icons/fa';

import api from '../../services/api';
import About from './screens/About';
import Stats from './screens/Stats';

interface RouteParams {
  name: string;
}

export interface PokemonTypesProps {
  name?: string;
  icon: SVGProps<SVGSVGElement>;
  color: string;
}
export interface PokemonProps {
  id: number;
  number: string;
  image: string;
  specie: string;
  height: string;
  weight: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    specialAttack: number;
    specialDefense: number;
  };
}

const Pokemon: React.FC = () => {
  const { name } = useParams() as RouteParams;
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [nameSectionActive, setNameSectionActive] = useState('about');

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, weight, height, stats, sprites, species } =
        response.data;

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        image:
          sprites.other['official-artwork'].front_default ||
          sprites.front_default,
        weight: `${weight / 10} kg`,
        specie: species.name,
        height: `${height / 10} m`,
        stats: {
          hp: stats[0].base_stat,
          attack: stats[1].base_stat,
          defense: stats[2].base_stat,
          specialAttack: stats[3].base_stat,
          specialDefense: stats[4].base_stat,
          speed: stats[5].base_stat,
        },
      });
    });
  }, [name]);

  const screenSelected = useMemo(() => {
    switch (nameSectionActive) {
      case 'about':
        return <About pokemon={pokemon} />;
      case 'stats':
        return pokemon.stats && <Stats stats={pokemon.stats}/>;      
      default:
        return <></>;
    }
  }, [nameSectionActive, pokemon]);

  return (
    <Container>
      <Voltar to="/">
        <FaChevronLeft size={50} />
      </Voltar>
      <TitleName>{name}</TitleName>
      <Content>
        <ContainerImage>
          <img src={pokemon.image} alt={`Imagem do pokemon ${name}`} />
        </ContainerImage>

        <SectionsName>
          {['about', 'stats'].map(nameSection => (
            <SectionsNameButton
              key={nameSection}
              type="button"
              onClick={() => setNameSectionActive(nameSection)}
              active={nameSection === nameSectionActive}
            >
              {nameSection === 'about' ? 'sobre' : nameSection === 'stats' ? 'estatísticas' : ''}
            </SectionsNameButton>
          ))}
        </SectionsName>
        <ContentSection>{screenSelected}</ContentSection>
      </Content>
    </Container>
  );
};

export default Pokemon;
