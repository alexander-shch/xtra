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
} from '../../../Redux/Lectures/lectures.action';
import { getvatList } from '../../../Redux/Vat/vat.action';
import Spinner from '../../spinner/Spinner';

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
  pageLoading,
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
            pageLoading={pageLoading}
            deleteLecture={deleteLecture}
          />
        )}
      />
      <Route
        exact
        path={`${match.path}/addLecture`}
        render={() => (
          <AddUpdateLecturer
            vatList={vatList}
            addNewLecture={addNewLecture}
            lecturesLoading={lecturesLoading}
            updateLecture={updateLecture}
          />
        )}
      />
      <Route
        path={`${match.path}/updateLecture/:LecturerID`}
        render={() =>
          pageLoading ? (
            <Spinner />
          ) : (
            <AddUpdateLecturer
              vatList={vatList}
              lecturesLoading={lecturesLoading}
              updateLecture={updateLecture}
              lectures={lectures}
            />
          )
        }
      />
    </Switch>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  lecturesLoading: state.lectures.loading,
  vatList: state.vat.vatList,
  searchField: state.searchField.searchfield,
  pageLoading: state.lectures.pageLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures()),
  getvatList: () => dispatch(getvatList()),
  addNewLecture: (lectureDetails, history) =>
    dispatch(addNewLecture(lectureDetails, history)),
  updateLecture: (id, lectureDetails) =>
    dispatch(updateLecture(id, lectureDetails)),
  deleteLecture: (id) => dispatch(deleteLecture(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LecturersRoutes);
