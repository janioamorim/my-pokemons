import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  height: 180px;
  width: inherit;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.9);
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  transition: all ease 0.5s;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
  }

  img {
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 10;
    height: 150px;
    width: 150px;

    -webkit-transition: -webkit-filter 400ms ease;
    transition: all ease 0.4s;
  }

  
`;

export const Pokemon = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  position: relative;
  padding-right: 30px;

  > svg {
    position: absolute;
    right: 5px;
    top: 0;
    height: 180px;
    width: 180px;

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
  }
`;
export const PokemonNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  color: #fff;
`;

export const PokemonName = styled.span`
  font-size: 40px;
  font-weight: bold;
  line-height: 45px;
  text-transform: capitalize;
  color: #fff;
`;
export const ContainerImg = styled.div`
  height: 170px;
  width: 170px;
  background: #fff;
  border-radius: 90px;
  position: absolute;
  left: 10px;
  top: 5px;
  &:hover {
    > img {
      transition: all ease 0.7s;
      left: 70px;
    }
  }
 
`;

export const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 8px;

  background: ${props => props.color};
  border-radius: 3px;

  & + div {
    margin-left: 10px;
  }
 
  span {
    margin-left: 8px;

    color: ${({ theme }) => theme.colors.text.white};
    font-size: 18px;
    font-weight: 500;
    line-height: 14px;
    text-transform: capitalize;
  }
`;
