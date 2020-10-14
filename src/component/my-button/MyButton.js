import React from 'react';
import Spinner from '../spinner/spinner';

import { CustomButtonContainer, ButtonContainer } from './MyButton.style';

const MyButton = ({ children, loading, ...props }) => {
  return (
    <ButtonContainer>
      {props.save ? loading ? <Spinner small /> : null : null}
      <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
    </ButtonContainer>
  );
};

export default MyButton;
