import React from 'react';
import { Container, ProfilePhoto, Line } from './styles'
import profilePhoto from '../../assets/Profile.png';

const PersonalContainer: React.FC = () => {

  return (
    <Container>
      <ProfilePhoto src={profilePhoto} alt="Profile Photo" />
      <Line />
    </Container>
  );
  
}

export default PersonalContainer;
