import React from 'react';
import './spinner.style.scss';

const Spinner = () => {
  return (
    <div className='spinnerWrap'>
      <div className='SpinnerContainer'>
        <div className='SpinnerOverlay' />
      </div>
    </div>
  );
};

export default Spinner;
