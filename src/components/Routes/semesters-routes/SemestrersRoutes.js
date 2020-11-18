import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import SemestersList from '../../../pages/semesters/semestersList/SemestersList';
import AddUpdateSemester from '../../../pages/semesters/add-Update/AddUpdateSemester';
import { connect } from 'react-redux';
import {
  getSemesters,
  addNewSemester,
  getSingleSemester,
  updateSemester,
  clearSingle,
  deleteSemester,
} from '../../../Redux/semester/semester.action';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import MyAlert from '../../My-Alert/MyAlert';
import DeleteBox from '../../delete-box/DeleteBox';

const SemestersRoutes = ({
  match,
  getSemesters,
  semestersList,
  listLoading,
  addNewSemester,
  getSingleSemester,
  singleSemester,
  innerSinglePageLoading,
  updateSemester,
  clearSingle,
  error,
  setAlert,
  deleteSemester,
  closeConfirmMessage,
  confirmMessageData,
}) => {
  useEffect(() => {
    getSemesters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <MyAlert />
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteSemester}
      />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <SemestersList
              semestersList={semestersList}
              listLoading={listLoading}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewSemester/`}
          render={() => (
            <AddUpdateSemester
              addNewSemester={addNewSemester}
              setAlert={setAlert}
            />
          )}
        />
        <Route
          path={`${match.path}/updateSemester/:semesterID`}
          render={() => (
            <AddUpdateSemester
              innerSinglePageLoading={innerSinglePageLoading}
              getSingleSemester={getSingleSemester}
              singleSemester={singleSemester}
              updateSemester={updateSemester}
              clearSingle={clearSingle}
              setAlert={setAlert}
              error={error}
            />
          )}
        />
      </Switch>
    </>
  );
};
const mapStateToProps = (state) => ({
  semestersList: state.semesters.semestersList,
  listLoading: state.semesters.listLoading,
  innerSinglePageLoading: state.semesters.innerSinglePageLoading,
  singleSemester: state.semesters.singleSemester,
  error: state.semesters.error,
  confirmMessageData: state.delete,
});

const mapDispatchToProps = (dispatch) => ({
  getSemesters: () => dispatch(getSemesters()),
  addNewSemester: (semesterData) => dispatch(addNewSemester(semesterData)),
  getSingleSemester: (semesterID) => dispatch(getSingleSemester(semesterID)),
  updateSemester: (semsterData, semesterID) =>
    dispatch(updateSemester(semsterData, semesterID)),
  clearSingle: () => dispatch(clearSingle()),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
  deleteSemester: (semesterID) => dispatch(deleteSemester(semesterID)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SemestersRoutes);
