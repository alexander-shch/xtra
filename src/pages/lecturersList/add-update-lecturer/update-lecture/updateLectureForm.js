import React, { useState } from 'react';
import CommentList from './lecture-comment-form/commentList';
import AvatarForm from './avatar-form/avatarForm';
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
import FilesLIst from './files-form/filesList';

const UpdateLectureForm = ({
  id,
  setAvatarImg,
  uploadCv,
  lectures,
  addNewNote,
  avatarLoading,
  loading,
  deleteNote,
  setAlert,
  confirmMessageData,
  closeConfirmMessage,
}) => {
  const SingleLecture = lectures.filter((item) => item._id === id);
  const [cvFile, setCvFile] = useState({ cv: null });
  const { cv } = cvFile;

  const handleCvChange = (e) => {
    const { files } = e.target;
    setCvFile({ cv: files });
  };

  const cvSubmit = async () => {
    let formData = new FormData();
    formData.append('file', cv[0]);
    try {
      await uploadCv(id, formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteNote}
        additionalData={id}
      />
      <AvatarForm
        id={id}
        lecture={SingleLecture}
        avatarLoading={avatarLoading}
        setAvatarImg={setAvatarImg}
      />
      <h4>חוזה וקבצים</h4>
      <FilesLIst handleCvChange={handleCvChange} cvSubmit={cvSubmit} />
      <div>
        <h4>הערות על המרצה</h4>
        <CommentList
          addNewNote={addNewNote}
          SingleLecture={SingleLecture}
          loading={loading}
          setAlert={setAlert}
        />
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  avatarLoading: state.lectures.avatarLoading,
  loading: state.lectures.loading,
  confirmMessageData: state.delete,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatarImg: (id, fromData) => dispatch(setAvatarImg(id, fromData)),
  uploadCv: (id, formData) => dispatch(uploadCv(id, formData)),
  deleteNote: (lectureId, noteID) => dispatch(deleteNote(lectureId, noteID)),
  addNewNote: (lectureId, text) => dispatch(addNewNote(lectureId, text)),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateLectureForm));
