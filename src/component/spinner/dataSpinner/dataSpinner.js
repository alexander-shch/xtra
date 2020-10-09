import React from 'react';
import SingleDataSpinner from './singleDataSpinner';

const DataSpinner = () => {
  return (
    <>
      {Array.from({ length: 5 }, (item, index) => (
        <SingleDataSpinner key={index} />
      ))}
    </>
  );
};

export default DataSpinner;
