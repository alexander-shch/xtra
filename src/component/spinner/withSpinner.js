import React from 'react';
import Spinner from './spinner';

const WithSpinner = (WarpedComponenet) => ({ loading, ...otherProps }) => {
  return loading ? <Spinner /> : <WarpedComponenet {...otherProps} />;
};

export default WithSpinner;
