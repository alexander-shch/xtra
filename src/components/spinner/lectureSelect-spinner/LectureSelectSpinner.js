import React from 'react';
import './LectureSelectSpinner.style.scss';

const LectureSelectSpinner = () => {
  return (
    <div className='lectureSpinnerContainer'>
      <div className='listContainer'>
        <div className='searchPlaceHolder' />
        <div className='lectureBoxSpinner' />
      </div>
      <div className='listContainer'>
        <div className='lectureBoxSpinner' />
      </div>
    </div>
  );
};

export default LectureSelectSpinner;
