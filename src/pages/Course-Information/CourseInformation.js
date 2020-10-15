import React from 'react';
import MyButton from '../../components/My-button/MyButton';
import { SettingSectionContainer } from '../../components/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import TableTop from '../../components/Table-top/Tabletop';

const CourseInformation = ({ history, match }) => {
  return (
    <SettingSectionContainer>
      <MyButton
        onClick={() => history.push(`${match.path}/addCourseInfo`)}
        addButtonStyle
      >
        הוספה
      </MyButton>
      <h4>רשימת טמפלטים</h4>
      <TableTop tableProps={['כותרת', 'אפשרויות']} />
    </SettingSectionContainer>
  );
};

export default withRouter(CourseInformation);
