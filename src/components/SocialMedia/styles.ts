import styled from 'styled-components';

export const List = styled.ul`
  color: #fbf8ef;
  margin-left: 10px;
  max-height: fit-content;
  

  div { 
    display: flex;
    width: auto;
    justify-content: left;
  }
  ul, li {
        list-style: none;
    }
  li {
    margin-top: 5px;
    width: 25px;
    margin-right: 15px;
  }
  small {
    margin-top: 8px;
    width: fit-content;
  }

`;
