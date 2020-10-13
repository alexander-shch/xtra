import styled, { css } from 'styled-components'

const smallSpinner = css`
  width: 25px;
  height: 25px;
`;
const bigSpinner = css`
  width: 50px;
  height: 50px;
`;

const getSpinnerStyle = (props) => {
  return props.small ? smallSpinner : bigSpinner;
};

export const SpinnerWrap = styled.div`
  position: ${(props) => (props.small ? 'absolute' : 'inherit')};
  right: ${(props) => (props.small ? '100%' : 0)};
`;

export const SpinnerContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 20%;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  ${getSpinnerStyle}

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
export const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
