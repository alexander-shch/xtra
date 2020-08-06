import React from 'react';
import { Route } from 'react-router-dom';
import BuildingsContainer from '../buildings/BuildingsContainer';

const SettingsRoutes = () => {
  return (
    <Route exact path='/settings/buildings' component={BuildingsContainer} />
  );
};

export default SettingsRoutes;
