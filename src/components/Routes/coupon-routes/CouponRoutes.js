import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AddUpdateCoupon from '../../../pages/coupons/add-update-coupon/AddUpdateCoupon';
import CouponsList from '../../../pages/coupons/coupon-list/CouponsList';
import { addNewCoupon } from '../../../Redux/coupons/coupons.actions';

const CouponRoutes = ({ match, addNewCoupon }) => {
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <CouponsList />} />
      <Route
        exact
        path={`${match.path}/addNewCoupon`}
        render={() => <AddUpdateCoupon addNewCoupon={addNewCoupon} />}
      />
    </>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addNewCoupon: (couponData) => dispatch(addNewCoupon(couponData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CouponRoutes);
