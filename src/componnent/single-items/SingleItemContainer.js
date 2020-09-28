import React from 'react';
import DataSpinner from '../spinner/DataSpinner/DataSpiner';

const SingleItemContainer = ({
  loading,
  data,
  SingleComponent,
  ...otherProps
}) => {
  return loading ? (
    <DataSpinner />
  ) : data.length === 0 ? (
    <h3>אין תוצאות</h3>
  ) : (
    data.map((item) => (
      <SingleComponent key={item._id} item={item} {...otherProps} />
    ))
  );
};

export default SingleItemContainer;
