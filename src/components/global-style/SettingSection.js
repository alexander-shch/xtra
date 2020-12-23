import styled from 'styled-components';
import { device } from '../../utils/responsive.utils';

export const SettingSectionContainer = styled.div`
  background-color: white;
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px auto 0;
  border: 1px solid #474d5338;
  padding: 20px;
  @media ${device.mobile} {
    width: 100%;
    padding: 0;
  }

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
  @media ${device.mobile} {
    width: 100%;
    padding: 0;
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const SingleItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  border-bottom: 1px solid darkgrey;
  padding: 2px 0;
  align-items: center;
  opacity: ${(props) => (props.$opacity ? 0.3 : 1)};

  &:last-child {
    border-bottom: none;
  }

  .buttons {
    flex-wrap: nowrap;
    display: flex;
    width: 30%;
    justify-content: flex-end;
  }
  .itemName {
    margin-right: 5px;
    width: 90%;
    text-align: right;

    &.expired {
      text-decoration: line-through;
      color: darkorange;
    }
    &.date {
      text-align: left;
    }
    &:last-child {
      width: 20%;
    }
  }
`;
