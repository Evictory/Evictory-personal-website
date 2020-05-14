import styled from 'styled-components';

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
  cursor: pointer;
  color: #fbf8ef;
  width: 100px;
  height: 40px;
  margin: 20px;
  transition-duration: 0.3s;
  box-shadow: 0 6px 14px 0 rgba(0,0,0,0.2), 0 5px 20px 0 rgba(0,0,0,0.19);
  :hover {
    background-color: #FFFFFF;
    color: #04D0D9;
    font-size: 18px;
    font-weight: bold;
    height: 50px;
  }
`;

export const ButtonCreate = styled(Button)`
  background-color: #108056
;`
export const ButtonDelete = styled(Button)`
background-color: #ff4040
;`
export const ButtonUpdate = styled(Button)`
background-color: #ffa500
;`
export const ButtonRead = styled(Button)`
background-color: #877da4
;`
