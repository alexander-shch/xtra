import React from 'react';
import { Route } from 'react-router-dom';
import DomainManagement from '../../../pages/Domain-Management/DomainManagement';
import AddUpdateDomain from '../../Add-Update-Domain/AddUpdateDomain';

const DomainManagementRoutes = ({ match }) => {
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <DomainManagement />} />
      <Route
        path={`${match.path}/:DomainID`}
        render={() => <AddUpdateDomain />}
      />
    </>
  );
};

export default DomainManagementRoutes;
