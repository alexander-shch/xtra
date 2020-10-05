import React from 'react';
import MyButton from '../../component/my-button/MyButton';
import TableTop from '../../component/table-top/Tabletop';
import { SettingSectionContainer } from '../../component/global-style/SettingSection';
import { withRouter } from 'react-router-dom';

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
