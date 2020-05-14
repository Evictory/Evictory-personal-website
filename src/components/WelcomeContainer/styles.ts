import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid #000000;
  align-items: center;  
  justify-content: center;
  display: flex;
  margin: 20px;
  padding: 10px;
  flex-direction: column;
  text-align: center;
  p {
    margin: 10px;
    font-size: 18px;
  }
`;

export const Description = styled.div`
  p {
    margin: 20px 20px;
    flex: 1;
  }
  text-align: center;
`;

export const Line = styled.line`
  background-color: #b1c0cd;
  border-radius: 5px;
  height: 2px;
  margin: 10px auto;
  width: 80%;
`;

