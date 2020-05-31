import React from 'react';

import Header from '../../components/Header/index';

import imgProfile from '../../assets/Profile.png';

import { Container, Content, HeaderContent, InfoActualPage } from './styles';

const Profile: React.FC = () => {
  return (
    <>
      <Header welcome="Bem-vindo!" funnyText="<Hello World />" />

      <Container>
        <Content>
          <HeaderContent>
            <img src={imgProfile} alt="Erms" />
            <div>
              <p>Texto acima do nav</p>
              <nav>
                <a href="Home">Home</a>
                <a href="Home">Contato</a>
                <a href="Home">Projetos</a>
                <a href="Home" className="crud">
                  CRUD
                </a>
              </nav>
            </div>
          </HeaderContent>
          <InfoActualPage>Você está em:</InfoActualPage>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
