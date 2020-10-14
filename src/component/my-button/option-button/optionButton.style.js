import styled, { css } from 'styled-components';

const editStyle = css`
  background-color: #ffc107;
`;

const deleteStyle = css`
  background-color: #ff0000;
`;

const downloadStyle = css`
  background-color: #40bf40;
`;
const spin = {
  spinAnimation: 'fa-spin 2s infinite linear',
};

const getStyle = (props) => {
  return props.delete
    ? deleteStyle
    : props.download
    ? downloadStyle
    : editStyle;
};

export const OptionButtonContainer = styled.button`
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  width: 30px;
  ${getStyle}
  svg {
    animation: ${(props) => (props.spin ? spin.spinAnimation : null)};
  }
`;
