import React from 'react';
import { Container, ProfilePhoto, Line } from './styles'

import Techs from '../Techs'
import profilePhoto from '../../assets/Profile.png';

const PersonalContainer: React.FC = () => {

  return (
    <Container>
      <ProfilePhoto src={profilePhoto} alt="Profile Photo" />
      <Line />
      <Techs />
      <Line />
    </Container>
  );
  
}

export default PersonalContainer;
