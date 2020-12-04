import React from 'react';
import SingleDataSpinner from './SingleDataSpinner';

const DataSpinner = ({ linesNum }) => {
  const lines = linesNum ? linesNum : 3;

  return (
    <>
      {Array.from({ length: lines }, (item, index) => (
        <SingleDataSpinner key={index} />
      ))}
    </>
  );
};

export default DataSpinner;
