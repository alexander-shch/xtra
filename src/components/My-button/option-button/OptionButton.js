import React from 'react';

import { OptionButtonContainer } from './optionButton.style';

const OptionButton = ({ children, ...props }) => {
  return (
    <OptionButtonContainer type='button' {...props}>
      {children}
    </OptionButtonContainer>
  );
};

export default OptionButton;
