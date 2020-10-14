import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import VatList from '../../../pages/vat-list/vatList';
import UpdateVatRate from '../../../pages/vat-list/updateVatRate';
import AddUpdateVatList from '../../../pages/vat-list/addUpdateVatList';
import { connect } from 'react-redux';
import {
  getVatList,
  addVatItem,
  updateVatItem,
  deleteVatItem,
  getSingleVatItem,
  clearSingle,
} from '../../../redux/vat/vat.action';
import { closeConfirmMessage } from '../../../redux/on-delete/delete.action';
import DeleteBox from '../../delete-box/deleteBox';
import WithSpinner from '../../spinner/withSpinner';

const AddUpdateVatListWithSpinner = WithSpinner(AddUpdateVatList);

const VatRoutes = ({
  match,
  vatList,
  getVatList,
  addVatItem,
  updateVatItem,
  deleteVatItem,
  loading,
  confirmMessageData,
  closeConfirmMessage,
  singleVatItem,
  getSingleVatItem,
  clearSingle,
  error,
}) => {
  useEffect(() => {
    getVatList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteVatItem}
      />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => <VatList vatList={vatList} loading={loading} />}
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
          render={() => (
            <AddUpdateVatListWithSpinner
              updateVatItem={updateVatItem}
              getSingleVatItem={getSingleVatItem}
              singleVatItem={singleVatItem}
              loading={loading}
              clearSingle={clearSingle}
              error={error}
            />
          )}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  vatList: state.vat.vatList,
  loading: state.vat.loading,
  confirmMessageData: state.delete,
  singleVatItem: state.vat.singleVatItem,
  error: state.vat.error,
});

const mapDispatchToProps = (dispatch) => ({
  getVatList: () => dispatch(getVatList()),
  addVatItem: (vatItem) => dispatch(addVatItem(vatItem)),
  updateVatItem: (itemId, vatItem) => dispatch(updateVatItem(itemId, vatItem)),
  deleteVatItem: (itemId) => dispatch(deleteVatItem(itemId)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleVatItem: (id) => dispatch(getSingleVatItem(id)),
  clearSingle: () => dispatch(clearSingle()),
});

export default connect(mapStateToProps, mapDispatchToProps)(VatRoutes);
