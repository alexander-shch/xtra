import React from 'react';
import { Route } from 'react-router-dom';
import BuildingsRoutes from '../../componnent/Routes/buildings-routes/BuildingsRoutes';
import ClassRoutes from '../../componnent/Routes/class-routes/ClassRoutes';

const SettingsRoutes = () => {
  return (
    <>
      <Route path='/settings/buildings' component={BuildingsRoutes} />
      <Route path='/settings/list-classes' component={ClassRoutes} />
    </>
  );
};

export default SettingsRoutes;
