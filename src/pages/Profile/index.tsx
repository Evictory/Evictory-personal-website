import React, { useState, useCallback } from 'react';

import Header from '../../components/Header/index';

import imgProfile from '../../assets/Profile.png';

import {
  Container,
  Content,
  HeaderContent,
  InfoActualItem,
  MainContent,
  ComponentContainer,
} from './styles';

const Profile: React.FC = () => {
  const [item, setItem] = useState('Home');

  const selectItem = useCallback((itemSelected) => {
    setItem(itemSelected);
  }, []);

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
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    selectItem('Home');
                  }}
                >
                  Home
                </a>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    selectItem('Contato');
                  }}
                >
                  Contato
                </a>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    selectItem('Projetos');
                  }}
                >
                  Projetos
                </a>
                <a
                  href="/"
                  onClick={(event) => {
                    event.preventDefault();
                    selectItem('CRUD');
                  }}
                  className="crud"
                >
                  CRUD
                </a>
              </nav>
            </div>
          </HeaderContent>
          <MainContent>
            <InfoActualItem>
              <span>Você está em:</span>
              <strong>{item}</strong>
            </InfoActualItem>
            <ComponentContainer>
              <p>teste</p>
            </ComponentContainer>
          </MainContent>
        </Content>
      </Container>
    </>
  );
};

export default Profile;
