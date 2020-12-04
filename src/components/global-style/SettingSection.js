import styled from 'styled-components';

export const SettingSectionContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  margin-top: 25px;
  width: 60%;
  padding: 10px;
  background-color: white;
  box-shadow: 3px 3px 5px 6px #ccc;
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
