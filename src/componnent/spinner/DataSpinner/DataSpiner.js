import React from 'react';
import SingleDataSpinner from '../dataSpinner/SingleDataSpinner';

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
