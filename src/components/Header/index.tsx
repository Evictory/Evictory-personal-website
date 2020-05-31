import React from 'react';
import { Container } from './styles';

interface HeaderProps {
  welcome: string;
  funnyText: string;
}

const Header: React.FC<HeaderProps> = ({ welcome, funnyText }: HeaderProps) => {
  return (
    <Container>
      <small className="welcome">{welcome}</small>
      <small className="funnyText">{funnyText}</small>
    </Container>
  );
};

export default Header;
