import styled from 'styled-components';
import { Link } from 'react-router-dom';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-direction: column;

  background: #BDBDBD;

  h1 {
    color: #fff;
  }
`;

export const Voltar = styled(Link)`
  top: 1vw;
  left: 1vw;
  z-index: 10;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.white};

  &:hover {
    cursor: pointer;
  }
`;
export const TitleName = styled.h1`
  color: #FFF;
  background: #324;
  font-size: 40px;
  text-transform: capitalize;
  padding: 15px 0 15px;
  margin-bottom: 10px;
  text-align: center;
`;
export const Content = styled.div`
  display: flex;
  align-items: stretch;
`;

export const ContainerImage = styled.div`
  display: flex;
  flex-direction: row;

  > img {
    z-index: 3;
    position: relative;
    top: 0;
    left: 0;
    height: 350px;
    width: 350px;
    background: #0489b1;
    padding: 30px;
    border-radius: 45px 45px 0 0;
  }
`;

export const SectionsName = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  align-items: flex-start;
  background: #173b0b;
  justify-content: space-around;
  border-radius: 45px 45px 0 0;
`;

export const SectionsNameButton = styled.button<{ active: boolean }>`  
  border: 0;
  outline: 0;
  width: 170px;
  background: none;

  font-size: 35px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.text.white};
  opacity: ${props => (props.active ? 1 : 0.4)};

  text-transform: capitalize;
`;

export const ContentSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
  background: #fff;
  padding: 0 40px;
  border-radius: 45px 45px 0 0;

  ${media.lessThan('huge')`
    padding: 0 20px;
  `};
`;
