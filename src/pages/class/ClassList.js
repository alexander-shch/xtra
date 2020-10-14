import React from 'react';
import MyButton from '../../component/my-button/button';
import { SettingSectionContainer } from '../../component/global-style/settingsSection';
import TableTop from '../../component/table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../component/single-items/singleItemContainer';
import singleClass from '../../component/single-items/single-class/single-class';

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
        SingleComponent={singleClass}
        data={classes}
        loading={loading}
        buildings={buildings}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(ClassList);
