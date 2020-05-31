import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: #0e1424;
  display: flex;
  height: 83px;
  justify-content: space-around;
  margin: 0;
  padding: 25px;
  width: 100%;

  small {
    font-size: 24px;
    &.welcome {
      color: #04d0d9;
      padding-left: 100px;
      min-width: 240px;
    }
    &.funnyText {
      color: #d9aa04;
      min-width: 240px;
    }
  }
`;
