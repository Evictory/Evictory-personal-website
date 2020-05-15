import styled from 'styled-components';

export const List = styled.ul`
  color: #fbf8ef;
  margin-bottom: 20px;
  margin-left: 10px;
  max-height: fit-content;
  
  a {
    color: #fbf8ef;
    display: block;
    display: flex;
    justify-content: left;
    text-decoration: none; 
    width: auto;
  }
  ul, li {
        list-style: none;
    }
  li {
    margin-top: 10px;
    margin-right: 15px;
    width: 25px;
  }
  small {
    margin-top: 15px;
    width: fit-content;
  }
`;
