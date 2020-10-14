import React, { useEffect, useRef, useState } from 'react';
import TableTop from '../../../../../componnent/table-top/Tabletop';
import MyButton from '../../../../../componnent/My-button/MyButton';
import SingleLectureNote from '../../../../../componnent/single-items/SingleLecureNote';
import DataSpinner from '../../../../../componnent/spinner/dataSpinner/DataSpiner';
import CommentPopUp from './note-popup/CommentPopUp';

const CommentList = ({ singleLecture, loading, addNewNote, setAlert }) => {
  const notesArr = singleLecture.internalNotes;
  const lectureID = singleLecture._id;

  const [newCommentview, setNewCommentView] = useState(false);
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
      {newCommentview ? (
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
        <DataSpinner linesNum={notesArr.length} />
      ) : notesArr.length === 0 ? (
        <h3>אין הערות</h3>
      ) : (
        notesArr.map((item) => <SingleLectureNote key={item._id} item={item} />)
      )}
    </>
  );
};

export default CommentList;
