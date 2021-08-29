import React from 'react';

import { Container, Row, BarStatus } from './styles';

export interface PokemonProps {
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  
}

const Stats: React.FC<PokemonProps> = ({ stats }) => {
  const statsContent: { title: string; field: keyof typeof stats }[] = [
    { title: 'HP', field: 'hp' },
    { title: 'Ataque', field: 'attack' },
    { title: 'Defesa', field: 'defense' },
    { title: 'Ataque Especial', field: 'specialAttack' },
    { title: 'Defesa Especial', field: 'specialDefense' },
    { title: 'Velocidade', field: 'speed' },
  ];

  return (
    <Container>
      {statsContent &&
        statsContent.map(stat => (
          <Row key={stat.field}>
            <strong>{stat.title}</strong>
            <span>{stats[stat.field] || 1}</span>
            <BarStatus
              percentage={stats[stat.field] < 100 ? stats[stat.field] : 100}
              color={'#0B610B'}
            >
              <span />
            </BarStatus>
            <span>100</span>
          </Row>
        ))}
    </Container>
  );
};

export default Stats;
