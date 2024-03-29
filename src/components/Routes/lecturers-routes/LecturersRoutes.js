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
  getSingleLecture,
  clearSingle,
} from '../../../Redux/Lectures/lectures.action';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import { getvatList } from '../../../Redux/Vat/vat.action';
import DeleteBox from '../../delete-box/DeleteBox';

const LecturersRoutes = ({
  match,
  lectures,
  vatList,
  getLectures,
  getvatList,
  inProcess,
  addNewLecture,
  searchField,
  updateLecture,
  deleteLecture,
  listLoading,
  closeConfirmMessage,
  confirmMessageData,
  getSingleLecture,
  singleLecture,
  error,
  clearSingle,
  innerSinglePageLoading,
  setAlert,
  deleteList,
}) => {
  useEffect(() => {
    getLectures();
    getvatList();
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
              listLoading={listLoading}
              deleteList={deleteList}
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
              inProcess={inProcess}
              updateLecture={updateLecture}
              setAlert={setAlert}
            />
          )}
        />
        <Route
          path={`${match.path}/updateLecture/:LecturerID`}
          render={() => (
            <AddUpdateLecturer
              vatList={vatList}
              updateLecture={updateLecture}
              getSingleLecture={getSingleLecture}
              singleLecture={singleLecture}
              error={error}
              clearSingle={clearSingle}
              innerSinglePageLoading={innerSinglePageLoading}
              inProcess={inProcess}
            />
          )}
        />
      </Switch>
    </>
  );
};
const mapStateToProps = (state) => ({
  lectures: state.lectures.lectures,
  singleLecture: state.lectures.singleLecture,
  innerSinglePageLoading: state.lectures.innerSinglePageLoading,
  vatList: state.vat.vatList,
  searchField: state.searchField.searchfield,
  listLoading: state.lectures.listLoading,
  confirmMessageData: state.delete,
  inProcess: state.lectures.inProcess,
  error: state.lectures.getSingleError,
  deleteList: state.lectures.deleteList,
});

const mapDispatchToProps = (dispatch) => ({
  getLectures: () => dispatch(getLectures()),
  getvatList: () => dispatch(getvatList()),
  addNewLecture: (lectureDetails, history) =>
    dispatch(addNewLecture(lectureDetails, history)),
  updateLecture: (id, lectureDetails) =>
    dispatch(updateLecture(id, lectureDetails)),
  deleteLecture: (id) => dispatch(deleteLecture(id)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleLecture: (id) => dispatch(getSingleLecture(id)),
  clearSingle: () => dispatch(clearSingle()),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LecturersRoutes);
