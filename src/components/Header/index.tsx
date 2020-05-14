import React from 'react';
import { Container, Name, ItemLeft } from './styles'

const Header: React.FC = () => {
  const msgLeft = "<p> Hello World </p>";
  return (
    <Container>
      <ItemLeft>
        {msgLeft}
      </ItemLeft>
      <Name>
        Emerson Vitorio de Oliveira
      </Name>
    </Container>
  );
}

export default Header;
