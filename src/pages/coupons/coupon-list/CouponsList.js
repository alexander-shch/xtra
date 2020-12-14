import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleCoupon from '../../../components/Single-Items/single-coupon/SingleCoupon';
import SingleItemContainer from '../../../components/Single-Items/SingleItemContainer';
import { useWindowSize } from '../../../utils/windowSize';

const CouponsList = ({ match, history, couponsList, listLoading }) => {
  const { width } = useWindowSize();
  let tableTitles =
    width <= 800
      ? ['כותרת', 'אפשרויות']
      : ['כותרת', 'בתוקף עד', 'קוד הטבה', 'הנחה', 'באחוזים?', 'אפשרויות'];
  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addNewCoupon`)}
      >
        הוספת קופון
      </MyButton>
      <h4>קופונים</h4>
      <TableTop tableProps={tableTitles} />

      <SingleItemContainer
        SingleComponent={SingleCoupon}
        data={couponsList}
        loading={listLoading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CouponsList);
