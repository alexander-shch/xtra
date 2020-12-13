import React from 'react';
import './disableOverlay.style.scss';

const DisableOverlay = ({ disable }) => {
  return disable ? <div className='overlay' /> : null;
};

export default DisableOverlay;
