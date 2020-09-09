import React from 'react';
import Spinner from './Spinner';

const WithSpinner = (WarpedComponenet) => ({
  loading,
  BuildingsData,
  ...otherProps
}) => {
  return loading ? (
    <Spinner />
  ) : (
    <WarpedComponenet data={BuildingsData} {...otherProps} />
  );
};

export default WithSpinner;
