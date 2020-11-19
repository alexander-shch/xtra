import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SearchField from '../../../components/searchField/SearchField';

const CoursesList = ({ history, match }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addNewCourse`)}
        addButtonStyle
      >
        הוספת קורס
      </MyButton>
      <SearchField />
      <h4>רשימה</h4>
      <TableTop tableProps={['מספר קורס', 'שם הקורס', 'תחום', 'אפשרויות']} />
    </SettingSectionContainer>
  );
};

export default withRouter(CoursesList);
