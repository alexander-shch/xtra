import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CoursesList from '../../../pages/courses-list/courses-list/CoursesList';
import AddUpdateCourse from '../../../pages/courses-list/add-update-course/AddUpdateCourse';
import { connect } from 'react-redux';
import { getCategories } from '../../../Redux/categories/categories.action';
import { getLectures } from '../../../Redux/Lectures/lectures.action';

const CoursesListRoutes = ({
  match,
  getCategories,
  getLectures,
  categories,
  lectures,
  searchField,
}) => {
  useEffect(() => {
    getCategories();
    getLectures();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <CoursesList />} />
      <Route
        exact
        path={`${match.path}/addNewCourse`}
        render={() => (
          <AddUpdateCourse
            searchField={searchField}
            categories={categories}
            lectures={lectures}
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
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getLectures: () => dispatch(getLectures()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListRoutes);
