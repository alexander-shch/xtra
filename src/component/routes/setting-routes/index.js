import React from 'react';
import { Route } from 'react-router-dom';
import BuildingsRoutes from '../buildings-routes/buildings-routes';
import ClassRoutes from '../class-routes';
import CourseRoutes from '../course-routes/courseRoutes';
import BookListRoutes from '../book-list-routes';
import VatRoutes from '../vat-routes/VatRoutes';
import CatagoriesRoutes from '../categories/catagoriesRoutes';

const SettingsRoutes = () => {
  return (
    <>
      <Route path='/settings/buildings' component={BuildingsRoutes} />
      <Route path='/settings/list-classes' component={ClassRoutes} />
      <Route path='/settings/Course-information' component={CourseRoutes} />
      <Route path='/settings/Course-books' component={BookListRoutes} />
      <Route path='/settings/VAT-multipliers' component={VatRoutes} />
      <Route path='/settings/Categories-list' component={CatagoriesRoutes} />
    </>
  );
};

export default SettingsRoutes;
