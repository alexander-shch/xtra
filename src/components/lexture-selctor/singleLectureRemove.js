import React from 'react';
import OptionButton from '../My-button/option-button/OptionButton';

const SingleLectureRemove = ({ lecture, removeLecture }) => {
  return (
    <div>
      <OptionButton
        list={'true'}
        delete
        onClick={() => removeLecture(lecture._id)}
        type='button'
      >
        -
      </OptionButton>
      <span
        className='lectureSelect'
        onDoubleClick={() => removeLecture(lecture._id)}
      >
        {lecture.name}
      </span>
    </div>
  );
};

export default SingleLectureRemove;
