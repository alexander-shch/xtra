import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Spinner from '../../componnent/spinner/Spinner';
import Buildings from './Buildings';
import { getBuildingsData } from '../../Redux/Data/data.actions';

const BuildingsContainer = ({ getBuildingsData, data, loading }) => {
  useEffect(() => {
    getBuildingsData();
  }, [getBuildingsData]);

  return loading ? <Spinner /> : <Buildings data={data} />;
};

const mapStateToProps = (state) => ({
  data: state.Buildings.buildings,
  loading: state.Buildings.isPending,
});

const mapDispatchToProps = (dispatch) => ({
  getBuildingsData: () => dispatch(getBuildingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BuildingsContainer);
