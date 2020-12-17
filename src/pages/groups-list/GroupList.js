import React from 'react';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import MyButton from '../../components/My-button/MyButton';
import TableTop from '../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';

const GroupList = ({ match, history }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addGroup`)}
        addButtonStyle
      >
        הוספת קבוצה
      </MyButton>
      <h4>רשימת קבוצות</h4>
      <TableTop
        tableProps={[
          'שם קבוצה',
          'תאריך פתיחה',
          'שם הקורס',
          'מינמום',
          'מספר נרשמים',
          'אפשרויות',
        ]}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(GroupList);
