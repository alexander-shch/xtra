import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import LecturersList from '../../../pages/lecturersList/lecturersList';
import AddUpdateLecturer from '../../../pages/lecturersList/addUpdateLecturer';
import { connect } from 'react-redux';
import {
  getLectures,
  addNewLecture,
  updateLecture,
  deleteLecture,
} from '../../../redux/lectures/lectures.action';
import { closeConfirmMessage } from '../../../redux/on-delete/delete.action';
import { getVatList } from '../../../redux/vat/vat.action';
import Spinner from '../../spinner/spinner';
import DeleteBox from '../../delete-box/deleteBox';

const LecturersRoutes = ({
  match,
  lectures,
  vatList,
  getLectures,
  getVatList,
  lecturesLoading,
  addNewLecture,
  searchField,
  updateLecture,
  deleteLecture,
  pageLoading,
  closeConfirmMessage,
  confirmMessageData,
}) => {
  useEffect(() => {
    getLectures();
    getVatList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteLecture}
      />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <LecturersList
              searchField={searchField}
              lectures={lectures}
              pageLoading={pageLoading}
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
    </>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  lecturesLoading: state.lectures.loading,
  vatList: state.vat.vatList,
  searchField: state.searchField.searchField,
  pageLoading: state.lectures.pageLoading,
  confirmMessageData: state.delete,
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures()),
  getvatList: () => dispatch(getVatList()),
  addNewLecture: (lectureDetails, history) =>
    dispatch(addNewLecture(lectureDetails, history)),
  updateLecture: (id, lectureDetails) =>
    dispatch(updateLecture(id, lectureDetails)),
  deleteLecture: (id) => dispatch(deleteLecture(id)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LecturersRoutes);
