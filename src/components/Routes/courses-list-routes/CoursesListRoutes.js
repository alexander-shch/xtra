import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CoursesList from '../../../pages/courses-list/courses-list/CoursesList';
import AddUpdateCourse from '../../../pages/courses-list/add-update-course/AddUpdateCourse';
import { connect } from 'react-redux';
import { getCategories } from '../../../Redux/categories/categories.action';
import { getLectures } from '../../../Redux/Lectures/lectures.action';
import {
  getCourseList,
  addNewCourse,
  getSingleCourse,
  clearSingle,
} from '../../../Redux/course-list/courseList.action';

const CoursesListRoutes = ({
  match,
  getCategories,
  getLectures,
  categories,
  lectures,
  searchField,
  getCourseList,
  getSingleCourse,
  clearSingle,
  courseList,
  listLoading,
  singleCourse,
  addNewCourse,
  inProcsess,
}) => {
  useEffect(() => {
    getCategories();
    getLectures();
    getCourseList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CoursesList courseList={courseList} listLoading={listLoading} />
        )}
      />
      <Route
        exact
        path={`${match.path}/addNewCourse`}
        render={() => (
          <AddUpdateCourse
            searchField={searchField}
            categories={categories}
            lectures={lectures}
            addNewCourse={addNewCourse}
            inProcsess={inProcsess}
          />
        )}
      />
      <Route
        path={`${match.path}/updateCourse/:courseID`}
        render={() => (
          <AddUpdateCourse
            categories={categories}
            lectures={lectures}
            searchField={searchField}
            getSingleCourse={getSingleCourse}
            clearSingle={clearSingle}
            singleCourse={singleCourse}
            inProcsess={inProcsess}
          />
        )}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  lectures: state.lectures.lectures,
  searchField: state.searchField.searchfield,
  courseList: state.courseList.courseList,
  listLoading: state.courseList.listLoading,
  singleCourse: state.courseList.singleCourse,
  inProcsess: state.courseList.inProcsess,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getLectures: () => dispatch(getLectures()),
  getCourseList: () => dispatch(getCourseList()),
  getSingleCourse: (id) => dispatch(getSingleCourse(id)),
  clearSingle: () => dispatch(clearSingle()),
  addNewCourse: (data, history) => dispatch(addNewCourse(data, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListRoutes);
