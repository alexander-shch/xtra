import React, { useState } from 'react';
import CommentPopUp from './Comment-PopUp';
import MyButton from '../../../../../../components/My-button/MyButton';
import SingleLecturerNote from '../../../../../../components/Single-Items/SingleLecturerNote';
import TableTop from '../../../../../../components/Table-top/Tabletop';

const CommentList = ({
  singleLecture,
  addNewNote,
  setAlert,
  notes,
  loading,
}) => {
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
          loading={loading}
        />
      ) : null}

      <MyButton onClick={() => setNewCommentView(true)} addButtonStyle>
        הוסף הערה
      </MyButton>
      <TableTop tableProps={['הערה', 'מחבר', 'תאריך', 'אפשרויות']} />
      {notes.length === 0 ? (
        <h3>אין הערות</h3>
      ) : (
        notes.map((item) => <SingleLecturerNote key={item._id} item={item} />)
      )}
    </>
  );
};

export default CommentList;
