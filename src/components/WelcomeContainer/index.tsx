import React from 'react';

import { Container, Line, Description } from './styles'

const WelcomeContainer: React.FC = () =>{  
  const description = 'All of this page was made from scratch using the main techs at your left. You can see the open code in my Github. The repository name is: "Personal-web".';
  return (
    <Container>
      <h1>
        Welcome to My profile!
      </h1>
      <p>
        I am so glad you are here. 
      </p>
      <p>
        My name is Emerson and I hope you enjoy it ;)
      </p>
      <Line/>
      <Description>
        <p>
          {description}          
        </p>
        <p>
          You can copy, study or whatever you like. 
        </p>
      </Description>
    </Container>
  );
}
export default WelcomeContainer;
