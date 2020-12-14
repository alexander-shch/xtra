import React from 'react';
import MyButton from '../../components/My-button/MyButton';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import SingleItemContainer from '../../components/Single-Items/SingleItemContainer';
import TableTop from '../../components/Table-top/Tabletop';
import SingleClass from '../../components/Single-Items/Single-class/SingleClass';

const ClassList = ({
  match,
  history,
  classes,
  buildings,
  loading,
  deleteList,
}) => {
  return (
    <SettingSectionContainer>
      <MyButton
        addButtonStyle
        onClick={() => history.push(`${match.path}/addNewClass`)}
      >
        הוספת כיתה
      </MyButton>
      <h4>רשימה</h4>
      <TableTop tableProps={['שם הכיתה', 'בניין', 'אפשרויות']} />

      <SingleItemContainer
        deleteList={deleteList}
        SingleComponent={SingleClass}
        data={classes}
        loading={loading}
        buildings={buildings}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(ClassList);
