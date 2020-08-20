import React from 'react';

import { OptinButtonContainer } from './optionButton.style';

const OptionButton = ({ children, ...props }) => {
  return <OptinButtonContainer {...props}>{children}</OptinButtonContainer>;
};

export default OptionButton;
