import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div` 
  display: flex;
  margin: 0 20px 20px 20px;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  
`;

export const Text = styled.div`
  font-size: 17px;
  p {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const ButtonArea = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;

`;

export const Button = styled.button`
  border-radius: 5px;
  border: none;
  box-shadow: 0 6px 14px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.19);
  color: #fbf8ef;
  cursor: pointer;
  height: 40px;
  margin: 20px;
  transition-duration: 0.3s;
  width: 100px;

  :hover {
    transform: translateY(10px);
  }

  &.create {
    background-color: #108056;
    :hover {
    background-color: ${shade(0.2, '#108056')};
    }
  }
  &.read {
    background-color: #877da4;
    :hover {
    background-color: ${shade(0.2, '#877da4')};
    }
  }
  &.delete {
    background-color: #ff4040;
    :hover {
    background-color: ${shade(0.2, '#ff4040')};
    }
  }
  &.update {
    background-color: #ffa500;
    :hover {
    background-color: ${shade(0.2, '#ffa500')};
    }
  }
`;
