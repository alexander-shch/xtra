import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';

const SingleLectureSelect = ({ lecture, addLecture }) => {
  return (
    <div>
      <OptionButton
        list={'true'}
        onClick={() => addLecture(lecture._id)}
        type='button'
      >
        +
      </OptionButton>
      <span
        className='lectureSelect'
        onDoubleClick={() => addLecture(lecture._id)}
      >
        {lecture.name}
      </span>
    </div>
  );
};

export default SingleLectureSelect;
