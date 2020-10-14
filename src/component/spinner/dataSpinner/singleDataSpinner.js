import React from 'react';
import './dataSpinner.style.scss';

const SingleDataSpinner = () => {
  return (
    <div className='DataSpinnerContainer'>
      <div className='cellContainer'>
        <div className='buttonPlaceHolder' />
        <div className='textLinesContainer'>
          <div className='text-line' />
          <div className='text-line' />
        </div>
      </div>
    </div>
  );
};

export default SingleDataSpinner;
