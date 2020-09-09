import React from 'react';
import { Route } from 'react-router-dom';
import BuildingsRoutes from '../buildings-routes/BuildingsRoutes';
import ClassRoutes from '../class-routes/ClassRoutes';
import CourseRoutes from '../Course-Routes/CourseRoutes';
import BookListRoutes from '../book-list-routes/BookListRoutes';
import VatRoutes from '../vat-routes/VatRoutes';
import DomainManagementRoutes from '../Domain-management/DomainManagement';

const SettingsRoutes = () => {
  return (
    <>
      <Route path='/settings/buildings' component={BuildingsRoutes} />
      <Route path='/settings/list-classes' component={ClassRoutes} />
      <Route path='/settings/Course-information' component={CourseRoutes} />
      <Route path='/settings/Course-books' component={BookListRoutes} />
      <Route path='/settings/VAT-multipliers' component={VatRoutes} />
      <Route
        path='/settings/Domain-management'
        component={DomainManagementRoutes}
      />
    </>
  );
};

export default SettingsRoutes;
