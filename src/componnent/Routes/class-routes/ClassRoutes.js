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
  getJewishHolydays,
} from '../../../Redux/classes/class.action';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import DeleteBox from '../../delete-box/DeleteBox';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { getBuildingsData } from '../../../Redux/buildings/buildings.actions';
import { closeSettingMenu } from '../../../Redux/settingsView/settings.actions';
import Spinner from '../../spinner/Spinner';
const ClassList = lazy(() => import('../../../pages/class/ClassList'));
const EditClass = lazy(() =>
  import('../../../pages/class/edit-class/EditClass')
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
  deleteAvailability,
  pageLoading,
  calenderLoading,
  getJewishHolydays,
  jewsihHolydays,
  setAlert,
  closeConfirmMessage,
  confirmMessageData,
}) => {
  useEffect(() => {
    getclassesData();
    getBuildingsData();
    if (jewsihHolydays.length === 0) {
      getJewishHolydays();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <DeleteBox
          confirmMessageData={confirmMessageData}
          closeConfirmMessage={closeConfirmMessage}
          deleteFunction={deleteClass}
        />
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <ClassList
              classes={classes}
              buildings={buildings}
              loading={pageLoading}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewClass`}
          render={() => (
            <EditClass
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
              <EditClass
                buildings={buildings}
                classes={classes}
                loading={loading}
                calenderLoading={calenderLoading}
                updateClass={updateClass}
                setAvailability={setAvailability}
                updateAvailability={updateAvailability}
                deleteAvailability={deleteAvailability}
                setAlert={setAlert}
                jewsihHolydays={jewsihHolydays}
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
  calenderLoading: state.classes.calenderLoading,
  jewsihHolydays: state.classes.jewsihHolydays,
  confirmMessageData: state.delete,
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
  getJewishHolydays: () => dispatch(getJewishHolydays()),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoutes);
