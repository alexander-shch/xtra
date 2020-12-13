import React from 'react';

import { OptionButtonContainer } from './optionButton.style';

const OptionButton = ({ children, ...props }) => {
  return <OptionButtonContainer {...props}>{children}</OptionButtonContainer>;
};

export default OptionButton;
