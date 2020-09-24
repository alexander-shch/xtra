import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import VatList from '../../../pages/Vat-list/VatList';
import UpdateVatRate from '../../../pages/Vat-list/UpdateVatRate';
import AddUpdateVatList from '../../../pages/Vat-list/AddUpdateVatList';
import { connect } from 'react-redux';
import {
  getvatList,
  addVatItem,
  updateVatItem,
  deleteVatItem,
} from '../../../Redux/Vat/vat.action';
import Spinner from '../../spinner/Spinner';

const VatRoutes = ({
  match,
  vatList,
  getvatList,
  addVatItem,
  updateVatItem,
  deleteVatItem,
  loading,
}) => {
  useEffect(() => {
    if (vatList.length === 0) {
      getvatList();
    }
  }, [getvatList, vatList]);
  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <VatList vatList={vatList} deleteVatItem={deleteVatItem} />
        )}
      />
      <Route
        exact
        path='/settings/VAT-multipliers/updateVatRate'
        render={() => <UpdateVatRate />}
      />
      <Route
        exact
        path={`${match.path}/addNewVat`}
        render={() => <AddUpdateVatList addVatItem={addVatItem} />}
      />
      <Route
        path={`${match.path}/updateVatItem/:vatID`}
        render={() =>
          loading ? (
            <Spinner />
          ) : (
            <AddUpdateVatList updateVatItem={updateVatItem} vatList={vatList} />
          )
        }
      />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  vatList: state.vat.vatList,
  loading: state.vat.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getvatList: () => dispatch(getvatList()),
  addVatItem: (vatItem) => dispatch(addVatItem(vatItem)),
  updateVatItem: (itemId, vatItem) => dispatch(updateVatItem(itemId, vatItem)),
  deleteVatItem: (itemId) => dispatch(deleteVatItem(itemId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VatRoutes);
