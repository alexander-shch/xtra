import Styled from 'styled-components';
import { device } from '../../utils/responsive.utils';

const primaryColor = '#ff6633';

export const FlexContainer = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  bottom: 0;
  top: 0;
  right: 0;
  position: fixed;
  z-index: 11;
`;

export const PopUpContainer = Styled.div`
    padding:${(props) => (props.padding ? '20px' : '0')};
    width: 30%;
    height: 20vh;
    background-color: white;
    position: fixed;
    top: 25%;
    border: 1px solid #474d5338;
    @media ${device.mobile} {
      width:60%;
      height:30vh;
    }
`;
export const BoxHeader = Styled.div`
      background-color: ${primaryColor};
      height: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      h5 {
        margin: 0;
        color: white;
        user-select: none;
      }
    }
`;

export const BoxContent = Styled.div`
    display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      h4 {
        text-align: center;
      }
`;
export const ButtonContainer = Styled.div`
      margin: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
`;
