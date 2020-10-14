import React from 'react';

import { OptionButtonContainer } from './optionButton.style';

const OptionButton = ({ children, ...props }: any) => {
  return <OptionButtonContainer {...props}>{children}</OptionButtonContainer>;
};

export default OptionButton;
