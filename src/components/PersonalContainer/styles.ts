import styled from 'styled-components';


export const Container = styled.div`
  background-color: #d8dfe6;
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  width: 180px;
  margin-left: 80px;
  height: 80vh;
  padding: 20px;
`;

export const ProfilePhoto = styled.img`
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
  width: 140px ;
  height: 130px ;
  border: solid 7px #FFFFFF;
`;

export const Line = styled.line`
  margin: 10px auto;
  height: 2px;
  background-color: #b1c0cd;
  width: 100%;
  border-radius: 5px;
`;
