import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';

const SingleLectureSelect = ({ lecture, addLecture }) => {
  return (
    <div>
      <span>{lecture.name}</span>
      <OptionButton
        list={'true'}
        onClick={() => addLecture(lecture)}
        type='button'
      >
        +
      </OptionButton>
    </div>
  );
};

export default SingleLectureSelect;
