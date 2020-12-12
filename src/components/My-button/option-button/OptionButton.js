import React from 'react';

import { OptionButtonContainer } from './optionButton.style';

const OptionButton = ({ children, makeDisable, ...props }) => {
  return (
    <OptionButtonContainer disabled={makeDisable} {...props}>
      {children}
    </OptionButtonContainer>
  );
};

export default OptionButton;
