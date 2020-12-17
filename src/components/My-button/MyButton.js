import React from 'react';
import Spinner from '../spinner/Spinner';

import { CustomButtonContainer, ButtonContainer } from './MyButton.style';

const MyButton = ({ children, loading, justify, ...props }) => {
  return (
    <ButtonContainer justify={justify}>
      {props.save ? loading ? <Spinner small /> : null : null}
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </ButtonContainer>
  );
};

export default MyButton;
