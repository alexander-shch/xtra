import styled, { css } from 'styled-components';

const editStyle = css`
  color: #ffc107;
`;

const deleteStyle = css`
  color: #ff0000;
`;

const downloadStyle = css`
  color: #40bf40;
`;

const viewStyle = css`
  color: #0099ff;
`;

const cantViewStyle = css`
  color: #cccccc;
  cursor: no-drop;
`;

const spin = {
  spinAnimation: 'fa-spin 2s infinite linear',
};

const getStyle = (props) => {
  return props.delete
    ? deleteStyle
    : props.download
    ? downloadStyle
    : props.view
    ? viewStyle
    : props.view === false
    ? cantViewStyle
    : editStyle;
};

export const OptionButtonContainer = styled.button`
  font-size: 20px;
  border: 1px solid;
  background-color: white;
  cursor: pointer;
  margin: 2px;
  width: ${(props) => (props.list ? '20px' : '30px')};
  padding: 0;
  ${getStyle}
  svg {
    animation: ${(props) => (props.spin ? spin.spinAnimation : null)};
  }
`;
