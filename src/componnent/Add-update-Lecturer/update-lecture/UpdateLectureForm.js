import React from 'react';
import FilesList from './filesForm/FilesList';
import CommentList from './lecture-comment-form/CommentList';
import MyButton from '../../My-button/MyButton';
import './updateForm.style.scss';

const UpdateLectureForm = ({ handdleImgChange, fileSubmit, id }) => {
  console.log(id);
  return (
    <>
      <div className='avatar-container'>
        <img alt='' src='https://via.placeholder.com/150' />
        <div className='fileInput-container'>
          <MyButton onClick={() => fileSubmit()}>שמור תמונה</MyButton>
          <input type='file' name='file' onChange={handdleImgChange} />
        </div>
      </div>

      <h4> חוזה וקבצים</h4>
      <FilesList />
      <h4>הערות על המרצה</h4>
      <CommentList />
    </>
  );
};

export default UpdateLectureForm;
