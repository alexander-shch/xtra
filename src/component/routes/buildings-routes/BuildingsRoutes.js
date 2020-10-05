import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getBuildingsData,
  deleteBuilding,
  addNewBuilding,
  updateBuilding,
  getSingleBuilding,
  clearSingle,
} from '../../../redux/buildings/buildings.actions';
import { closeConfirmMessage } from '../../../redux/on-delete/delete.action';
import Spinner from '../../spinner/spinner';
import WithSpinner from '../../spinner/withSpinner';
import DeleteBox from '../../delete-box/deleteBox';
const AddUpdateBuilding = lazy(() =>
  import('../../../pages/buildings/add-update-buildings/AddUpdateBuilding')
);
const Buildings = lazy(() => import('../../../pages/buildings/Buildings'));

const UpdateBuildingWithSpinner = WithSpinner(AddUpdateBuilding);

const BuildingsRoutes = ({
  match,
  getBuildingsData,
  data,
  addNewBuilding,
  updateBuilding,
  confirmMessageData,
  closeConfirmMessage,
  deleteBuilding,
  getSingleBuilding,
  singleBuilding,
  clearSingle,
  error,
  ...otherProps
}) => {
  useEffect(() => {
    getBuildingsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <DeleteBox
          confirmMessageData={confirmMessageData}
          closeConfirmMessage={closeConfirmMessage}
          deleteFunction={deleteBuilding}
        />
        <Route
          exact
          path={`${match.path}`}
          render={() => <Buildings data={data} {...otherProps} />}
        />
        <Route
          exact
          path={`${match.path}/addNewBulding/`}
          render={() => <AddUpdateBuilding addNewBuilding={addNewBuilding} />}
        />
        <Route
          path={`${match.path}/updateBulding/:BuildingId/`}
          render={() => (
            <UpdateBuildingWithSpinner
              loading={otherProps.loading}
              updateBuilding={updateBuilding}
              singleBuilding={singleBuilding}
              getSingleBuilding={getSingleBuilding}
              error={error}
              clearSingle={clearSingle}
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
  confirmMessageData: state.delete,
  singleBuilding: state.buildings.singleBuilding,
  error: state.buildings.error,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsData: () => dispatch(getBuildingsData()),
  deleteBuilding: (id) => dispatch(deleteBuilding(id)),
  addNewBuilding: (name, active) => dispatch(addNewBuilding(name, active)),
  updateBuilding: (itemid, name, active) =>
    dispatch(updateBuilding(itemid, name, active)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleBuilding: (id, setBuildingDetail) =>
    dispatch(getSingleBuilding(id, setBuildingDetail)),
  clearSingle: () => dispatch(clearSingle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsRoutes);
