import React from 'react';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import TableTop from '../../componnent/Table-top/Tabletop';
import MyButton from '../../componnent/My-button/MyButton';
import { withRouter } from 'react-router-dom';

const DomainManagement = ({ history, match }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addDomain`)}
        addButtonStyle
      >
        הוספת תחום
      </MyButton>
      <h4>רשימת תחומים</h4>
      <TableTop tableProps={['מספר', 'תחום', 'אפשרויות']} />
    </SettingSectionContainer>
  );
};

export default withRouter(DomainManagement);
