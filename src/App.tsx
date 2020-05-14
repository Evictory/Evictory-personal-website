import React from 'react';
import Header from '../src/components/Header/index';
import GlobalStyle from './styles/globalStyle';
import PersonalContainer from './components/PersonalContainer'
import WelcomeContainer from './components/WelcomeContainer';

const App: React.FC = () => {
  return (
    <>
    <Header />
    <PersonalContainer />
    <WelcomeContainer />
    <GlobalStyle />
    </>
  );
}

export default App;
