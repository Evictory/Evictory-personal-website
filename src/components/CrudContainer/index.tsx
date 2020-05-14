import React from 'react';

import { Container, Text, ButtonArea, ButtonCreate , ButtonDelete, ButtonRead, ButtonUpdate} from './styles';

const CrudContainer: React.FC = () => {

  return (
    <Container>
      <Text>
        <p>
          Also, I made this little and simple CRUD below to demonstrate the node usage
        </p>
        <small>
          At first it's necessary to create a simple user, then you can do the rest of the operations. 
        </small>
      </Text>
      <ButtonArea>
        <ButtonCreate>Create</ButtonCreate>
        <ButtonRead>Read</ButtonRead>
        <ButtonUpdate>Update</ButtonUpdate>
        <ButtonDelete>Delete</ButtonDelete>
      </ButtonArea>
    </Container>
  );
  
}

export default CrudContainer;
