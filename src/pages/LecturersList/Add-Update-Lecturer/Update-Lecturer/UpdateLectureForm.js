import React from 'react';
import FilesList from './FilesForm/FileList';
import AvatarForm from './Avatars-Form/AvatarForm';
import { setAvatarImg } from '../../../../Redux/Lectures/lectures.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addNewNote,
  deleteNote,
  uploadCv,
  deleteFile,
} from '../../../../Redux/Lectures/lectures.action';
import { setAlert } from '../../../../Redux/My-Alert/myAlert.action';
import { closeConfirmMessage } from '../../../../Redux/on-delete/delete.action';
import DeleteBox from '../../../../components/delete-box/DeleteBox';
import CommentList from './lecture-comment-form/Comments-Popup/CommentList';

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
  files,
  deleteList,
  notes,
  lectureId,
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
        pageID={lectureId}
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
        fileSpinner={fileSpinner}
        files={files}
        deleteList={deleteList}
      />
      <div>
        <h4>הערות על המרצה</h4>
        <CommentList
          addNewNote={addNewNote}
          notes={notes}
          singleLecture={singleLecture}
          loading={noteLoading}
          setAlert={setAlert}
          deleteList={deleteList}
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
  files: state.lectures.singleLecture.files,
  notes: state.lectures.singleLecture.internalNotes,
  OnDeleteFunction: state.delete.addDeleteFunction,
  lectureId: state.delete.pageID,
  fileSpinner: state.lectures.fileSpinner,
  deleteList: state.lectures.deleteList,
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
