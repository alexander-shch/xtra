import styled from 'styled-components';

export const SettingSectionContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 50px auto 0;
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
  margin: auto;
  margin-top: 10px;
  width: 70%;
  padding: 10px;
  background-color: white;
  border: 2px solid #ff6633;
  text-align: end;
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
  flex-direction: row-reverse;
  .buttons {
    flex-wrap: wrap;
    display: flex;
    width: 30%;
    justify-content: flex-start;
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
