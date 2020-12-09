import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';

const CouponsList = ({ match, history }) => {
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
          'תאריך',
          'כותרת',
          'קוד הטבה',
          'הנחה',
          'באחוזים?',
          'אפשרויות',
        ]}
      />

      {/* <SingleItemContainer
      SingleComponent={BuildingItem}
      data={data}
      loading={otherProps.loading}
    /> */}
    </SettingSectionContainer>
  );
};

export default withRouter(CouponsList);
