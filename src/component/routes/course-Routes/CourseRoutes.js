import React from 'react';
import { Route } from 'react-router-dom';
import CourseInformation from '../../../pages/course-Information/courseInformation';
import AddUpdateCourseInfo from '../../../pages/course-Information/add-update-course/addUpdateCourseInfo';

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
