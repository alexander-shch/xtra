import React from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SearchField from '../../../components/searchField/SearchField';
import SingleItemContainer from '../../../components/Single-Items/SingleItemContainer';
import SingleCourse from '../../../components/Single-Items/single-course/SingleCourse';

const CoursesList = ({ history, match, courseList, listLoading }) => {
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
      <TableTop tableProps={['שם הקורס', 'תחום', 'אפשרויות']} />
      <SingleItemContainer
        SingleComponent={SingleCourse}
        data={courseList}
        loading={listLoading}
      />
    </SettingSectionContainer>
  );
};

export default withRouter(CoursesList);
