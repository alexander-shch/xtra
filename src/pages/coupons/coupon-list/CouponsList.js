import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleCoupon from '../../../components/Single-Items/single-coupon/SingleCoupon';
import SingleItemContainer from '../../../components/Single-Items/SingleItemContainer';

const CouponsList = ({ match, history, couponsList, listLoading }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addNewCoupon`)}
      >
        הוספת קופון
      </MyButton>
      <h4>קופונים</h4>
      <TableTop
        tableProps={[
          'בתוקף עד',
          'כותרת',
          'קוד הטבה',
          'הנחה',
          'באחוזים?',
          'אפשרויות',
        ]}
      />

      <SingleItemContainer
        SingleComponent={SingleCoupon}
        data={couponsList}
        loading={listLoading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CouponsList);
