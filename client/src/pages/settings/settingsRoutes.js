import React from 'react';
import { Route } from 'react-router-dom';
import BuildingsRoutes from '../../componnent/buildings-routes/BuildingsRoutes';

const SettingsRoutes = () => {
  return <Route path='/settings/buildings' component={BuildingsRoutes} />;
};

export default SettingsRoutes;
