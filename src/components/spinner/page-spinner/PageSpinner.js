import React from 'react';
import Spinner from '../Spinner';
import { SpinnerPageContainer } from './pageSpinner.style';

const PageSpinner = ({ active, height, ...props }) => {
  return active ? (
    <SpinnerPageContainer height={height}>
      <Spinner />
      <h2>טוען</h2>
    </SpinnerPageContainer>
  ) : (
    props.children
  );
};

export default PageSpinner;
