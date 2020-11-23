import React from 'react';
import Header from '../../components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/dashboard/Dashboard';
import SettingsRoutes from '../../components/Routes/setting-routes/settingsRoutes';
import LecturersRoutes from '../../components/Routes/lecturers-routes/LecturersRoutes';
import CoursesListRoutes from '../../components/Routes/courses-list-routes/CoursesListRoutes';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/lecturers' component={LecturersRoutes} />
        <Route path='/courses' component={CoursesListRoutes} />
        <Route path='/settings' component={SettingsRoutes} />
      </Switch>
    </>
  );
};

export default Main;
