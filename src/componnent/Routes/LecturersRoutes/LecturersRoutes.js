import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LecturersList from '../../../pages/LecturersList/LecturersList';
import AddUpdateLecturer from '../../../pages/LecturersList/AddUpdateLecturer';
import { connect } from 'react-redux';
import {
  getLectures,
  addNewLecture,
  updateLecture,
  deleteLecture,
  setAvatarImg,
} from '../../../Redux/Lectures/lectures.action';
import { getvatList } from '../../../Redux/Vat/vat.action';

const LecturersRoutes = ({
  match,
  lectures,
  vatList,
  getLectures,
  getvatList,
  lecturesLoading,
  addNewLecture,
  searchField,
  updateLecture,
  deleteLecture,
  setAvatarImg,
}) => {
  useEffect(() => {
    getLectures();
    getvatList();
  }, [getLectures, getvatList]);

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <LecturersList
            searchField={searchField}
            lectures={lectures}
            lecturesLoading={lecturesLoading}
            deleteLecture={deleteLecture}
          />
        )}
      />
      <Route
        path={`${match.path}/:LecturerID`}
        render={() => (
          <AddUpdateLecturer
            vatList={vatList}
            addNewLecture={addNewLecture}
            updateLecture={updateLecture}
            setAvatarImg={setAvatarImg}
          />
        )}
      />
    </Switch>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  lecturesLoading: state.lectures.loading,
  vatList: state.vat.vatList,
  searchField: state.searchField.searchfield,
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures()),
  getvatList: () => dispatch(getvatList()),
  addNewLecture: (lectureDetails, history) =>
    dispatch(addNewLecture(lectureDetails, history)),
  updateLecture: (id, lectureDetails) =>
    dispatch(updateLecture(id, lectureDetails)),
  deleteLecture: (id) => dispatch(deleteLecture(id)),
  setAvatarImg: (id, dataForm) => dispatch(setAvatarImg(id, dataForm)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LecturersRoutes);
