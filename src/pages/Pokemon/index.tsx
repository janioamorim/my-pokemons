import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Voltar } from './styles';
import { FaChevronLeft } from 'react-icons/fa';

interface RouteParams {
  name: string;
}

const Pokemon: React.FC = () => {
  const { name } = useParams() as RouteParams;
  return (
    <Container>
      <Voltar to="/">
        <FaChevronLeft size={50} />
      </Voltar>
      <h1>Detalhes Pokemon - {name}</h1>
    </Container>
  );
};

export default Pokemon;
