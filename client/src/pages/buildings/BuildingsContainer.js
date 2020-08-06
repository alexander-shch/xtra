import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Spinner from '../../componnent/spinner/Spinner';
import Buildings from './Buildings';
import { getBuildingsData } from '../../Redux/Data/data.actions';

const BuildingsContainer = ({ getBuildingsDataAction, data, loading }) => {
  useEffect(() => {
    getBuildingsDataAction();
  }, [getBuildingsDataAction]);

  return loading ? <Spinner /> : <Buildings data={data} />;
};

const mapStateToProps = (state) => ({
  data: state.Buildings.buildings,
  loading: state.Buildings.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsDataAction: () => dispatch(getBuildingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer);
