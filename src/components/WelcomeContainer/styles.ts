import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 20px 0 20px;
  padding: 10px;
  text-align: center;

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const Description = styled.div`
  p {
    margin: 20px 20px;
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

