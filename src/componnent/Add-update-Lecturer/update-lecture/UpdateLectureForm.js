import React, { useState } from 'react';
import FilesList from './filesForm/FilesList';
import CommentList from './lecture-comment-form/CommentList';
import AvatarForm from './Avatar-Form/AvatarForm';
import { setAvatarImg } from '../../../Redux/Lectures/lectures.action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  addNewNote,
  deleteNote,
} from '../../../Redux/Lectures/lectures.action';

const UpdateLectureForm = ({
  id,
  setAvatarImg,
  lectures,
  addNewNote,
  avatarLoading,
  loading,
  deleteNote,
}) => {
  const SingleLecture = lectures.filter((item) => item._id === id);

  const [imgFile, setImgFile] = useState({ file: null });
  const { file } = imgFile;

  const handdleImgChange = (e) => {
    const { files } = e.target;
    setImgFile({ file: files });
  };

  const fileSubmit = async (e) => {
    if (!file) {
      return;
    }
    let fromData = new FormData();
    fromData.append('file', file[0]);
    try {
      await setAvatarImg(id, fromData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AvatarForm
        handdleImgChange={handdleImgChange}
        fileSubmit={fileSubmit}
        lecture={SingleLecture}
        avatarLoading={avatarLoading}
      />
      <h4> חוזה וקבצים</h4>
      <FilesList />
      <h4>הערות על המרצה</h4>
      <CommentList
        addNewNote={addNewNote}
        SingleLecture={SingleLecture}
        loading={loading}
        deleteNote={deleteNote}
      />
    </>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  avatarLoading: state.lectures.avatarLoading,
  loading: state.lectures.loading,
});

const mapDispatchToProps = (dispatch) => ({
  setAvatarImg: (id, fromData) => dispatch(setAvatarImg(id, fromData)),
  deleteNote: (lectureId, noteID) => dispatch(deleteNote(lectureId, noteID)),
  addNewNote: (lectureId, text) => dispatch(addNewNote(lectureId, text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UpdateLectureForm));
