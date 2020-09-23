import React from 'react';
// import './spinner.style.scss';
import { SpinnerContainer, SpinnerOverlay, SpinnerWrap } from './spinnerStyle';

const Spinner = ({ ...props }) => {
  return (
    <SpinnerWrap {...props}>
      <SpinnerContainer {...props}>
        <SpinnerOverlay />
      </SpinnerContainer>
    </SpinnerWrap>
  );
};

export default Spinner;
