import React from 'react';
import { Route } from 'react-router-dom';
import CourseInformation from '../../../pages/course-information/courseInfo';
import AddUpdateCourseInfo from '../../../pages/course-information/add-update-course/addUpdateCourseInformation';

const CourseRoutes = ({ match }) => {
  return (
    <>
      <Route
        exact
        path={`${match.path}`}
        render={() => <CourseInformation />}
      />
      <Route
        path={`${match.path}/:courseID`}
        render={() => <AddUpdateCourseInfo />}
      />
    </>
  );
};

export default CourseRoutes;
