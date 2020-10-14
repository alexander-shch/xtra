import React from 'react';
import { ButtonContainer } from '../global-style/popUpsStyle';
import Spinner from '../spinner/spinner';
import { CustomButtonContainer } from './myButton.style';


const MyButton = ({ children, loading, ...props }) => {
  return (
    <ButtonContainer>
      {props.save ? loading ? <Spinner small /> : null : null}
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </ButtonContainer>
  );
};

export default MyButton;
