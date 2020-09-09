import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VatList from '../../../pages/Vat-list/VatList';
import UpdateVatRate from '../../../pages/Vat-list/UpdateVatRate';
import AddUpdateVatList from '../../../pages/Vat-list/AddUpdateVatList';

const VatRoutes = ({ match }) => {
  return (
    <Switch>
      <Route exact path={`${match.path}`} render={() => <VatList />} />
      <Route
        exact
        path='/settings/VAT-multipliers/updateVatRate'
        render={() => <UpdateVatRate />}
      />
      <Route
        exact
        path={`${match.path}/:vatID`}
        render={() => <AddUpdateVatList />}
      />
    </Switch>
  );
};

export default VatRoutes;
