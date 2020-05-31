import React from 'react';
import GlobalStyle from './styles/globalStyle';

import Profile from './pages/Profile';

const App: React.FC = () => {
  return (
    <>
      <Profile />
      <GlobalStyle />
    </>
  );
};

export default App;
