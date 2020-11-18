import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/footer';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../components/dashboard/Dashboard';
import SettingsRoutes from '../../components/Routes/setting-routes/settingsRoutes';
import LecturersRoutes from '../../components/Routes/lecturers-routes/LecturersRoutes';

const Main = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/lecturers' component={LecturersRoutes} />
        <Route path='/settings' component={SettingsRoutes} />
      </Switch>
      <Footer />
    </>
  );
};

export default Main;
