import React from 'react';
import Header from '../../component/header/header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../component/dashboard/dashboard';
import SettingsRoutes from '../../component/routes/setting-routes/settingsRoutes';
import LecturersRoutes from '../../component/routes/lecturers-routes/lecturersRoutes';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/lecturers' component={LecturersRoutes} />
        <Route path='/settings' component={SettingsRoutes} />
      </Switch>
    </>
  );
};

export default Main;
