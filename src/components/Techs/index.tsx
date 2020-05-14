import React from 'react';
import { Title, List } from './styles'

const Techs: React.FC = () => {
  const title = "Main Techs"
  const techs = [
    "TypeScript",
    "ReactJS",
    "NodeJS",
    "CSS",
  ]
  return (
    <>
    <Title>{ title }</Title>
    <List>
      {techs.map(tech => <li>{ tech }</li>)}
    </List>
    </>
  );
}

export default Techs;
