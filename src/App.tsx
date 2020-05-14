import React from 'react';
import Header from '../src/components/Header/index';
import GlobalStyle from './styles/globalStyle';
import PersonalContainer from './components/PersonalContainer'

const App: React.FC = () => {
  return (
    <>
    <Header />
    <PersonalContainer />
    <GlobalStyle />
    </>
  );
}

export default App;
