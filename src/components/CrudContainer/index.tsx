import React from 'react';

import { Container, Text, ButtonArea, Button} from './styles';

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
        <Button className="create">Create</Button>
        <Button className="read">Read</Button>
        <Button className="update">Update</Button>
        <Button className="delete">Delete</Button>
      </ButtonArea>
    </Container>
  );
  
}

export default CrudContainer;
