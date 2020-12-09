import styled from 'styled-components';

export const SettingSectionContainer = styled.div`
  background-color: white;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px auto 0;
  border: 1px solid #474d5338;
  padding: 20px;
  h4 {
    width: 100%;
    text-align: right;
  }
  .addButtons {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

export const UpdatePageContainer = styled.div`
  background-color: white;
  margin: auto;
  margin-top: 25px;
  width: 55%;
  padding: 10px;
  background-color: white;
  border: 1px solid #474d5338;
  h4,
  h3 {
    text-align: center;
  }
  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const SingleItem = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 2px 0;
  align-items: center;
  .buttons {
    flex-wrap: wrap;
    display: flex;
    width: 30%;
    justify-content: flex-end;
  }
  .itemName {
    margin-right: 5px;
    width: 90%;
    text-align: right;
    &.date {
      text-align: left;
    }
    &:last-child {
      width: 20%;
      text-align: center;
    }
  }
`;
