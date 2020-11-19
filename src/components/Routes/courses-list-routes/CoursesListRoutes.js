import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import CoursesList from '../../../pages/courses-list/courses-list/CoursesList';
import AddUpdateCourse from '../../../pages/courses-list/add-update-course/AddUpdateCourse';
import { connect } from 'react-redux';
import { getCategories } from '../../../Redux/categories/categories.action';

const CoursesListRoutes = ({ match, getCategories, categories }) => {
  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Route exact path={`${match.path}`} render={() => <CoursesList />} />
      <Route
        exact
        path={`${match.path}/addNewCourse`}
        render={() => <AddUpdateCourse categories={categories} />}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListRoutes);
