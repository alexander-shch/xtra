import React, { useState } from 'react';
import FilesList from './filesForm/filesList';
import CommentList from './lecture-comment-form/commentList';
import AvatarForm from './avatar-Form/avatarForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAlert } from '../../../../redux/my-alert/myAlert.action';
import { closeConfirmMessage } from '../../../../redux/on-delete/delete.action';
import DeleteBox from '../../../../component/delete-box/deleteBox';
import {
  addNewNote,
  deleteNote,
  setAvatarImg,
  uploadCv,
} from '../../../../redux/lectures/lectures.action';

const UpdateLectureForm = ({
  id,
  setAvatarImg,
  uploadCv,
  addNewNote,
  avatarLoading,
  noteLoading,
  deleteNote,
  setAlert,
  confirmMessageData,
  closeConfirmMessage,
  singleLecture,
  OnDeleteFunction,
  deleteFile,
  fileSpinner,
}) => {
  const deleteFunctions = {
    deleteNote: deleteNote,
    deleteFile: deleteFile,
  };
  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteFunctions[OnDeleteFunction]}
        additionalData={id}
      />
      <AvatarForm
        id={id}
        singleLecture={singleLecture}
        avatarLoading={avatarLoading}
        setAvatarImg={setAvatarImg}
      />
      <h4>חוזה וקבצים</h4>
      <FilesList
        id={id}
        uploadCv={uploadCv}
        singleLecture={singleLecture}
        fileSpinner={fileSpinner}
      />
      <div>
        <h4>הערות על המרצה</h4>
        <CommentList
          addNewNote={addNewNote}
          singleLecture={singleLecture}
          loading={noteLoading}
          setAlert={setAlert}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  avatarLoading: state.lectures.avatarLoading,
  noteLoading: state.lectures.noteLoading,
  confirmMessageData: state.delete,
  singleLecture: state.lectures.singleLecture,
  OnDeleteFunction: state.delete.addDeleteFunction,
  fileSpinner: state.lectures.fileSpinner,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatarImg: (id, fromData) => dispatch(setAvatarImg(id, fromData)),
  uploadCv: (id, formData) => dispatch(uploadCv(id, formData)),
  deleteNote: (lectureId, noteID) => dispatch(deleteNote(lectureId, noteID)),
  deleteFile: (lectureId, fileID) => dispatch(deleteFile(lectureId, fileID)),
  addNewNote: (lectureId, text) => dispatch(addNewNote(lectureId, text)),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateLectureForm));
