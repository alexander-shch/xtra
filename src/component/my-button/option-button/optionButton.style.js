import styled, { css } from 'styled-components';

const editStyle = css`
  background-color: #ffc107;
`;

const deleteStyle = css`
  background-color: #ff0000;
`;

const getStyle = (props) => {
  return props.delete ? deleteStyle : editStyle;
};

export const OptinButtonContainer = styled.button`
  border: none;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  width: 30px;
  ${getStyle}
`;
