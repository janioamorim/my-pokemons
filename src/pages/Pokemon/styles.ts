import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;

  background: #585858;

  h1 {
    color: #fff;
  }
`;

export const Voltar = styled(Link)`
  position: fixed;
  top: 6vw;
  left: 1vw;
  z-index: 10;

  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};

  &:hover {
    cursor: pointer;
  }
`;
