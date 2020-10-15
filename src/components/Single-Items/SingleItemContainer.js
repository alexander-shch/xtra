import React from 'react';
import DataSpinner from '../spinner/DataSpinner/DataSpiner';

const SingleItemContainer = ({
  loading,
  data,
  SingleComponent,
  ...otherProps
}) => {
  if (loading) {
    return <DataSpinner />;
  }
  if (data.length === 0) {
    return <h3>אין תוצאות</h3>;
  } else {
    return data.map((item) => (
      <SingleComponent key={item._id} item={item} {...otherProps} />
    ));
  }
};

export default SingleItemContainer;
