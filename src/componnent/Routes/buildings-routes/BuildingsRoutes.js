import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getBuildingsData,
  deleteBuilding,
  addNewBuilding,
  updateBuilding,
} from '../../../Redux/buildings/buildings.actions';
import Spinner from '../../spinner/Spinner';
const AddUpdateBuilding = lazy(() =>
  import('../../Add-update-buildings/AddUpdateBuilding')
);
const Buildings = lazy(() => import('../../../pages/buildings/Buildings'));

const BuildingsRoutes = ({
  match,
  getBuildingsData,
  data,
  addNewBuilding,
  updateBuilding,
  ...otherProps
}) => {
  useEffect(() => {
    if (data.length === 0) {
      getBuildingsData();
    }
  }, [getBuildingsData, data]);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <Buildings
              data={data}
              deleteBuilding={deleteBuilding}
              {...otherProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:BuildingsId`}
          render={() => (
            <AddUpdateBuilding
              addNewBuilding={addNewBuilding}
              updateBuilding={updateBuilding}
            />
          )}
        />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.buildings.isPending,
  data: state.buildings.buildings,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsData: () => dispatch(getBuildingsData()),
  deleteBuilding: (id) => dispatch(deleteBuilding(id)),
  addNewBuilding: (name, active) => dispatch(addNewBuilding(name, active)),
  updateBuilding: (itemid, name, active) =>
    dispatch(updateBuilding(itemid, name, active)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsRoutes);
