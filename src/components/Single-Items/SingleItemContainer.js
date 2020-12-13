import React from 'react';
import DataSpinner from '../spinner/DataSpinner/DataSpinner';
import { useWindowSize } from '../../utils/windowSize';

const SingleItemContainer = ({
  loading,
  data,
  SingleComponent,
  ...otherProps
}) => {
  const { width } = useWindowSize();
  if (loading) {
    return <DataSpinner />;
  }
  if (data.length === 0) {
    return <h3>אין תוצאות</h3>;
  } else {
    return data.map((item) => (
      <SingleComponent
        key={item._id}
        item={item}
        width={width}
        {...otherProps}
      />
    ));
  }
};

export default SingleItemContainer;
