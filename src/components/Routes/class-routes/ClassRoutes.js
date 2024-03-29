import React, { useEffect } from 'react';
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
  getSingleClass,
  clearSingle,
} from '../../../Redux/classes/class.action';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import DeleteBox from '../../delete-box/DeleteBox';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { getBuildingsData } from '../../../Redux/buildings/buildings.actions';
import { closeSettingMenu } from '../../../Redux/settingsView/settings.actions';

import EditClass from '../../../pages/class/edit-class/EditClass';
import ClassList from '../../../pages/class/ClassList';

const ClassRoutes = ({
  getBuildingsData,
  getclassesData,
  match,
  buildings,
  classes,
  process,
  deleteClass,
  addNewClass,
  pageLoading,
  calenderLoading,
  getJewishHolydays,
  setAlert,
  closeConfirmMessage,
  confirmMessageData,
  getSingleClass,
  singleClass,
  jewishHolydays,
  deleteList,
  ...props
}) => {
  useEffect(() => {
    getclassesData();
    getBuildingsData();
    if (jewishHolydays.length === 0) {
      getJewishHolydays();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
            deleteList={deleteList}
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
            process={process}
            addNewClass={addNewClass}
            setAlert={setAlert}
          />
        )}
      />
      <Route
        path={`${match.path}/updateClass/:classID/`}
        render={() => (
          <EditClass
            getSingleClass={getSingleClass}
            buildings={buildings}
            singleClass={singleClass}
            process={process}
            calenderLoading={calenderLoading}
            setAlert={setAlert}
            jewishHolydays={jewishHolydays}
            {...props}
          />
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  buildings: state.buildings.buildings,
  classes: state.classes.classes,
  singleClass: state.classes.singleClass,
  process: state.classes.process,
  error: state.classes.singlePageError,
  pageLoading: state.classes.loading,
  calenderLoading: state.classes.calenderLoading,
  jewishHolydays: state.classes.jewishHolydays,
  confirmMessageData: state.delete,
  innerSinglePageLoading: state.classes.innerSinglePageLoading,
  deleteList: state.classes.deleteList,
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
  getSingleClass: (id) => dispatch(getSingleClass(id)),
  clearSingle: () => dispatch(clearSingle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoutes);
