import React from 'react';
import { Container, Name, ItemLeft } from './styles'

const Header: React.FC = (myName, itemleft) => {
  return (
    <Container>
      <ItemLeft>
        Hello World
      </ItemLeft>
      <Name>
        Emerson Vitorio de Oliveira
      </Name>
    </Container>
  );
}

export default Header;
