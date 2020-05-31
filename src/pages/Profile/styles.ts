import styled from 'styled-components';

export const Container = styled.div`
  margin: 0px;
  display: flex;
  justify-content: center;
  height: 610px;
  width: 100%;
`;

export const Content = styled.div`
  background: rgba(196, 196, 196, 0.01);
  border-radius: 0px 0px 50px 50px;
  height: 550px;
  width: 1086px;
`;

export const HeaderContent = styled.div`
  align-items: center;
  background-color: #434f60;
  border-radius: 0px 0px 50px 50px;
  display: flex;
  height: 172px;
  padding: 0px 30px 0px 30px;
  width: 100%;

  img {
    border-radius: 50%;
    height: 130px;
    margin-bottom: 30px;
    margin-top: 30px;
    width: 130px;
  }
  div {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 0px 10px 0px;
    p {
      align-items: center;
      color: #9ac7c9;
      display: flex;
      font-size: 24px;
      height: 101px;
    }
    nav {
      align-items: center;
      background-color: #566476;
      border-radius: 50px 50px 0px 0px;
      display: flex;
      height: 71px;
      justify-content: space-around;
      padding: 10px;
      width: 95%;
      a {
        color: #353e4a;
        font-weight: bold;
        font-size: 16px;
        margin: 2px;
        text-decoration: none;
        &.crud {
          color: #04d0d9;
        }
        :hover {
          border-bottom: solid 2px #04d0d9;
          opacity: 0.7;
          transition: 0.2s;
        }
      }
    }
  }
`;
export const InfoActualPage = styled.div``;
