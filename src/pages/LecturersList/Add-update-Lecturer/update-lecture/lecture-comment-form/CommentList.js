import React, { useState } from 'react';
import TableTop from '../../../../../component/table-top/Tabletop';
import MyButton from '../../../../../component/my-button/MyButton';
import SingleLectureNote from '../../../../../component/single-items/singleLectureNote';
import DataSpinner from '../../../../../component/spinner/dataSpinner/dataSpinner';

import CommentPopUp from './note-popup/CommentPopUp';

const CommentList = ({ SingleLecture, loading, addNewNote, setAlert }) => {
  const notesArr = SingleLecture[0] ? SingleLecture[0].internalNotes : [];
  const lectureID = SingleLecture[0]._id;

  const [newCommentView, setNewCommentView] = useState(false);
  const [noteText, setNoteText] = useState({ text: '' });
  const { text } = noteText;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNoteText({ ...noteText, [name]: value });
  };
  const noteSubmit = async (e) => {
    e.preventDefault();
    if (text.length === 0) {
      setAlert('יש למלא הערה', 'error');
      return;
    }
    try {
      await addNewNote(lectureID, text);
    } catch (err) {
      console.log(err);
    }
    setNewCommentView(false);
  };

  return (
    <>
      {newCommentView ? (
        <CommentPopUp
          setNewCommentView={setNewCommentView}
          handleChange={handleChange}
          noteSubmit={noteSubmit}
        />
      ) : null}

      <MyButton onClick={() => setNewCommentView(true)} addButtonStyle>
        הוסף הערה
      </MyButton>
      <TableTop tableProps={['הערה', 'תאריך', 'אפשרויות']} />
      {loading ? (
        <DataSpinner />
      ) : notesArr.length === 0 ? (
        <h3>אין הערות</h3>
      ) : (
        notesArr.map((item) => <SingleLectureNote key={item._id} item={item} />)
      )}
    </>
  );
};

export default CommentList;
