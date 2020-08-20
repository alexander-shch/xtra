import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getclassesData } from '../../../Redux/classes/class.action';
import ClassList from '../../../pages/class/ClassList';
import { getBuildingsData } from '../../../Redux/buildings/buildings.actions';
import AddUpDateClasses from '../../Add-update-classes/AddUpDateClasses';

const ClassRoutes = ({
  getBuildingsData,
  getclassesData,
  match,
  buildings,
  classes,
}) => {
  useEffect(() => {
    getclassesData();
    getBuildingsData();
  }, [getclassesData, getBuildingsData]);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => <ClassList classes={classes} buildings={buildings} />}
      />
      <Route
        path={`${match.path}/:ClassesID`}
        render={() => <AddUpDateClasses buildings={buildings} />}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  buildings: state.Buildings.buildings,
  classes: state.classes.classes,
});

const mapDispatchToProps = (dispatch) => ({
  getclassesData: () => dispatch(getclassesData()),
  getBuildingsData: () => dispatch(getBuildingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ClassRoutes);
