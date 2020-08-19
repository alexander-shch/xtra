import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getBuildingsData } from '../../../Redux/buildings/buildings.actions';
import Spinner from '../../spinner/Spinner';
const AddUpdateBuilding = lazy(() =>
  import('../../Add-Update-Building/AddUpdateBuilding')
);
const Buildings = lazy(() => import('../../../pages/buildings/Buildings'));

const BuildingsRoutes = ({ match, getBuildingsData, data, ...otherProps }) => {
  useEffect(() => {
    getBuildingsData();
  }, [getBuildingsData]);
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          render={() => <Buildings data={data} {...otherProps} />}
        />
        <Route
          path={`${match.path}/:BuildingsId`}
          component={AddUpdateBuilding}
        />
      </Suspense>
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.Buildings.isPending,
  data: state.Buildings.buildings,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsData: () => dispatch(getBuildingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsRoutes);
