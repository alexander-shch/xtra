import React from 'react';
import MyButton from '../../componnent/My-button/MyButton';
import { SettingSectionContainer } from '../../componnent/global-style/SettingSection';
import SingleClass from '../../componnent/single-items/single-class/SingleClass';
import TableTop from '../../componnent/table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../componnent/single-items/singleItemContainer';

const ClassList = ({ match, history, classes, buildings, loading }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addNewClass`)}
      >
        הוספת כיתה
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['בניין', 'כיתה', 'אפשרויות']} />

      <SingleItemContainer
        SingleComponent={SingleClass}
        data={classes}
        loading={loading}
        buildings={buildings}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(ClassList);
