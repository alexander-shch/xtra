import React, { useState } from 'react';
import TableTop from '../../../Table-top/Tabletop';
import MyButton from '../../../My-button/MyButton';
import SingleLectureNote from '../../../single-items/SingleLecureNote';
import DataSpinner from '../../../spinner/DataSpinner/DataSpiner';
import DeleteBox from '../../../delete-box/DeleteBox';
import CommentPopUp from './note-popup/CommentPopUp';
import useDelete from '../../../delete-box/useDeleteHook';

const CommentList = ({
  SingleLecture,
  loading,
  addNewNote,
  deleteNote,
  setAlert,
}) => {
  const notesArr = SingleLecture[0].internalNotes;
  const lectureID = SingleLecture[0]._id;
  const deleteHook = useDelete();

  const [newCommentview, setNewCommentView] = useState(false);
  const [noteText, setNoteText] = useState({ text: '' });

  const { id } = deleteHook.itemToDelete;
  const { text } = noteText;

  const openBoxsetItemToDelete = (item) => {
    deleteHook.ItemToDelete({
      id: item._id,
      name: item.text.slice(0, 40) + '...',
    });
  };
  const closeBox = () => {
    deleteHook.setView(false);
  };

  const delteItem = async () => {
    try {
      await deleteNote(lectureID, id);
    } catch (err) {
      console.log(err);
    }
    deleteHook.setView(false);
  };

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
        <DataSpinner />
      ) : notesArr.length === 0 ? (
        <h3>אין הערות</h3>
      ) : (
        notesArr.map((item) => (
          <SingleLectureNote
            openBox={openBoxsetItemToDelete}
            key={item._id}
            item={item}
          />
        ))
      )}
      {deleteHook.deleteBoxView ? (
        <DeleteBox
          delteItem={delteItem}
          close={closeBox}
          item={deleteHook.itemToDelete}
        />
      ) : null}
    </>
  );
};

export default CommentList;
