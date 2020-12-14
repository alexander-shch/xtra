import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AddUpdateCoupon from '../../../pages/coupons/add-update-coupon/AddUpdateCoupon';
import CouponsList from '../../../pages/coupons/coupon-list/CouponsList';
import {
  addNewCoupon,
  getAllCoupons,
  updateCoupon,
  getSingleCoupon,
  clearSingle,
  deleteCoupon,
} from '../../../Redux/coupons/coupons.actions';
import DeleteBox from '../../delete-box/DeleteBox';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';

const CouponRoutes = ({
  match,
  addNewCoupon,
  getAllCoupons,
  couponsList,
  listLoading,
  updateCoupon,
  getSingleCoupon,
  innerPageLoading,
  singleCoupon,
  clearSingle,
  process,
  deleteCoupon,
  closeConfirmMessage,
  confirmMessageData,
  error,
  deleteList,
}) => {
  useEffect(() => {
    getAllCoupons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteCoupon}
      />
      <Switch>
        <Route
          exact
          path={`${match.path}`}
          render={() => (
            <CouponsList
              couponsList={couponsList}
              listLoading={listLoading}
              deleteList={deleteList}
            />
          )}
        />
        <Route
          exact
          path={`${match.path}/addNewCoupon`}
          render={() => (
            <AddUpdateCoupon addNewCoupon={addNewCoupon} process={process} />
          )}
        />

        <Route
          path={`${match.path}/updateCoupon/:couponID`}
          render={() => (
            <AddUpdateCoupon
              getSingleCoupon={getSingleCoupon}
              updateCoupon={updateCoupon}
              innerPageLoading={innerPageLoading}
              singleCoupon={singleCoupon}
              clearSingle={clearSingle}
              process={process}
              error={error}
            />
          )}
        />
      </Switch>
    </>
  );
};

const mapStateToProps = (state) => ({
  couponsList: state.coupons.couponsList,
  listLoading: state.coupons.listLoading,
  innerPageLoading: state.coupons.innerPageLoading,
  singleCoupon: state.coupons.singleCoupon,
  process: state.coupons.process,
  error: state.coupons.singlePageError,
  confirmMessageData: state.delete,
  deleteList: state.coupons.deleteList,
});

const mapDispatchToProps = (dispatch) => ({
  addNewCoupon: (couponData) => dispatch(addNewCoupon(couponData)),
  getAllCoupons: () => dispatch(getAllCoupons()),
  getSingleCoupon: (id) => dispatch(getSingleCoupon(id)),
  updateCoupon: (data, id) => dispatch(updateCoupon(data, id)),
  clearSingle: () => dispatch(clearSingle()),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  deleteCoupon: (id) => dispatch(deleteCoupon(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponRoutes);
