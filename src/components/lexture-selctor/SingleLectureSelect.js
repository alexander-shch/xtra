import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';

const SingleLectureSelect = ({ lecture, addLecture }) => {
  return (
    <div>
      <OptionButton
        list={'true'}
        onClick={() => addLecture(lecture)}
        type='button'
      >
        +
      </OptionButton>
      <span>{lecture.name}</span>
    </div>
  );
};

export default SingleLectureSelect;
