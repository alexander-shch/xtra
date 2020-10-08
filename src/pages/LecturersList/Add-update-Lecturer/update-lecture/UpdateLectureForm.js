import React from 'react';
import FilesList from './filesForm/FilesList';
import CommentList from './lecture-comment-form/CommentList';
import AvatarForm from './Avatar-Form/AvatarForm';
import { setAvatarImg } from '../../../../Redux/Lectures/lectures.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addNewNote,
  deleteNote,
  uploadCv,
} from '../../../../Redux/Lectures/lectures.action';
import { setAlert } from '../../../../Redux/My-Alert/myAlert.action';
import { closeConfirmMessage } from '../../../../Redux/on-delete/delete.action';
import DeleteBox from '../../../../componnent/delete-box/DeleteBox';

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
  singleLecture,
}) => {
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
        singleLecture={singleLecture}
        avatarLoading={avatarLoading}
        setAvatarImg={setAvatarImg}
      />
      <h4>חוזה וקבצים</h4>
      <FilesList id={id} uploadCv={uploadCv} />
      <div>
        <h4>הערות על המרצה</h4>
        <CommentList
          addNewNote={addNewNote}
          singleLecture={singleLecture}
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
  singleLecture: state.lectures.singleLecture,
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
