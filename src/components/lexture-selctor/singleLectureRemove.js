import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';

const SingleLectureRemove = ({ lecture, removeLecture }) => {
  return (
    <div>
      <span>{lecture.name}</span>
      <OptionButton
        list={'true'}
        delete
        onClick={() => removeLecture(lecture)}
        type='button'
      >
        -
      </OptionButton>
    </div>
  );
};

export default SingleLectureRemove;
