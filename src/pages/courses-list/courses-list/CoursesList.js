import React, { useState } from 'react';
import { SettingSectionContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import TableTop from '../../../components/Table-top/Tabletop';
import { withRouter } from 'react-router-dom';
import SearchField from '../../../components/searchField/SearchField';
import SingleItemContainer from '../../../components/Single-Items/SingleItemContainer';
import SingleCourse from '../../../components/Single-Items/single-course/SingleCourse';
import CheckBoxes from '../../../components/checkbox/CheckBoxes';

const CoursesList = ({
  history,
  match,
  courseList,
  listLoading,
  categories,
  searchField,
}) => {
  const [checked, setChecked] = useState([]);

  let categoriesObj = categories
    ? categories.reduce((acc, category) => {
        acc[category._id] = category.title;
        return acc;
      }, {})
    : null;

  const handleCheck = (e) => {
    const { value } = e.target;
    if (checked.indexOf(value) === -1) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter((item) => item !== value));
    }
  };
  const filterCourse = () => {
    let checkedSet = new Set(checked);
    if (checked.length > 0 && !searchField) {
      return courseList.filter((course) => checkedSet.has(course.category));
    } else if (searchField && checked.length === 0) {
      return courseList.filter(({ title }) => title.includes(searchField));
    } else if (searchField && checked.length > 0) {
      return courseList.filter(
        (course) =>
          checkedSet.has(course.category) && course.title.includes(searchField)
      );
    } else {
      return courseList;
    }
  };
  return (
    <>
      <SettingSectionContainer>
        <MyButton
          onClick={() => history.push(`${match.path}/addNewCourse`)}
          addButtonStyle
        >
          הוספת קורס
        </MyButton>
        <SearchField placeholder='חפש לפי שם קורס' />
        <CheckBoxes categories={categories} handleCheck={handleCheck} />
      </SettingSectionContainer>
      <SettingSectionContainer>
        <h4>רשימת קורסים</h4>
        <TableTop tableProps={['שם הקורס', 'תחום', 'אפשרויות']} />
        <SingleItemContainer
          SingleComponent={SingleCourse}
          data={filterCourse()}
          categoriesObj={categoriesObj}
          loading={listLoading}
        />
      </SettingSectionContainer>
    </>
  );
};

export default withRouter(CoursesList);
