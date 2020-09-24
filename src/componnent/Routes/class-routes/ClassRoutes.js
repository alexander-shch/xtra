import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getclassesData,
  deleteClass,
  addNewClass,
  updateClass,
  setAvailability,
  updateAvailability,
  deleteAvailability,
} from '../../../Redux/classes/class.action';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { getBuildingsData } from '../../../Redux/buildings/buildings.actions';
import { closeSettingMenu } from '../../../Redux/settingsView/settings.actions';
import Spinner from '../../spinner/Spinner';
const ClassList = lazy(() => import('../../../pages/class/ClassList'));
const AddUpDateClasses = lazy(() =>
  import('../../Add-update-classes/AddUpDateClasses')
);

const ClassRoutes = ({
  getBuildingsData,
  getclassesData,
  match,
  buildings,
  classes,
  loading,
  deleteClass,
  addNewClass,
  updateClass,
  setAvailability,
  updateAvailability,
  closeSettingMenu,
  deleteAvailability,
  pageLoading,
  setAlert,
}) => {
  useEffect(() => {
    if (classes.length === 0) {
      getclassesData();
    }
    if (buildings.length === 0) {
      getBuildingsData();
    }
  }, [getclassesData, getBuildingsData, classes, buildings]);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <ClassList
              classes={classes}
              buildings={buildings}
              loading={loading}
              deleteClass={deleteClass}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewClass`}
          render={() => (
            <AddUpDateClasses
              classes={classes}
              buildings={buildings}
              loading={loading}
              addNewClass={addNewClass}
              setAlert={setAlert}
            />
          )}
        />
        <Route
          path={`${match.path}/updateClass/:classID/`}
          render={() =>
            pageLoading ? (
              <Spinner />
            ) : (
              <AddUpDateClasses
                buildings={buildings}
                classes={classes}
                loading={loading}
                updateClass={updateClass}
                setAvailability={setAvailability}
                updateAvailability={updateAvailability}
                deleteAvailability={deleteAvailability}
                setAlert={setAlert}
              />
            )
          }
        />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  buildings: state.buildings.buildings,
  classes: state.classes.classes,
  loading: state.classes.loading,
  pageLoading: state.classes.pageLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getclassesData: () => dispatch(getclassesData()),
  getBuildingsData: () => dispatch(getBuildingsData()),
  deleteClass: (id) => dispatch(deleteClass(id)),
  addNewClass: (classDetails, history) =>
    dispatch(addNewClass(classDetails, history)),
  updateClass: (id, classDetails) => dispatch(updateClass(id, classDetails)),
  setAvailability: (classId, dateDetails) =>
    dispatch(setAvailability(classId, dateDetails)),
  updateAvailability: (dateDetails) =>
    dispatch(updateAvailability(dateDetails)),
  closeSettingMenu: () => dispatch(closeSettingMenu()),
  deleteAvailability: (classId, availabilityId) =>
    dispatch(deleteAvailability(classId, availabilityId)),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoutes);
