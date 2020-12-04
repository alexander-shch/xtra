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
  getSingleVatItem,
  clearSingle,
  getVatRate,
  updateVat,
} from '../../../Redux/Vat/vat.action';
import { setAlert } from '../../../Redux/My-Alert/myAlert.action';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import DeleteBox from '../../delete-box/DeleteBox';
import WithSpinner from '../../spinner/WithSpinner';
import MyAlert from '../../My-Alert/MyAlert';

const UpdateVatRateWithSpinner = WithSpinner(UpdateVatRate);

const VatRoutes = ({
  match,
  vatList,
  getvatList,
  addVatItem,
  deleteVatItem,
  loading,
  confirmMessageData,
  closeConfirmMessage,
  updateVatRate,
  getVatRate,
  vatRate,
  vatRateLoading,
  ...props
}) => {
  useEffect(() => {
    getvatList();
    getVatRate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteVatItem}
      />
      <MyAlert />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => <VatList vatList={vatList} loading={loading} />}
        />
        <Route
          exact
          path='/settings/VAT-multipliers/updateVatRate'
          render={() => (
            <UpdateVatRateWithSpinner
              loading={vatRateLoading}
              vatRate={vatRate}
              {...props}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewVat`}
          render={() => <AddUpdateVatList addVatItem={addVatItem} />}
        />
        <Route
          path={`${match.path}/updateVatItem/:vatID`}
          render={() => (
            <AddUpdateVatList updateVatItem={updateVatItem} {...props} />
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
  innerSinglePageLoading: state.vat.innerSinglePageLoading,
  vatRate: state.vat.vatRate,
  vatRateLoading: state.vat.vatRateLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getvatList: () => dispatch(getvatList()),
  addVatItem: (vatItem) => dispatch(addVatItem(vatItem)),
  updateVatItem: (itemId, vatItem) => dispatch(updateVatItem(itemId, vatItem)),
  deleteVatItem: (itemId) => dispatch(deleteVatItem(itemId)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  getSingleVatItem: (id) => dispatch(getSingleVatItem(id)),
  clearSingle: () => dispatch(clearSingle()),
  getVatRate: () => dispatch(getVatRate()),
  updateVat: (vatValue) => dispatch(updateVat(vatValue)),
  setAlert: (text, style) => dispatch(setAlert(text, style)),
});

export default connect(mapStateToProps, mapDispatchToProps)(VatRoutes);
