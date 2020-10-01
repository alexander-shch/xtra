import styled, { css } from 'styled-components';

const buttonStyles = css`
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;

  &:hover {
    color: #fff;
    background-color: #0b6dd6;
    border-color: #0b6dd6;
  }
`;

const forgotStyle = css`
  color: #fff;
  background-color: #868e96;
  border-color: #868e96;

  &:hover {
    background-color: #757d85;
    border-color: #757d85;
  }
`;

const addStyle = css`
  border: none;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 2px;
  width: 130px;
  height: 40px;
  background-color: #ff6633;

  &:hover {
    background-color: #ff4d11;
  }
`;

const deleteStyle = css`
  color: white;
  background-color: #ff3333;
  border-color: #ff3333;

  &:hover {
    background-color: #ff1a1a;
    border-color: #ff1a1a;
  }
`;

const getButtonStyles = (props) => {
  let style = buttonStyles;
  let styleObj = {
    forgot: forgotStyle,
    addButtonStyle: addStyle,
    delete: deleteStyle,
  };

  let objArr = Object.keys(styleObj);

  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i] in props) {
      style = styleObj[objArr[i]];
      break;
    }
  }
  return style;

  // return props.forgot
  //   ? forgotStyle
  //   : props.addButtonStyle
  //   ? addStyle
  //   : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  margin: 5px;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  ${getButtonStyles}
`;

export const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-end;
  align-items: center;
`;
