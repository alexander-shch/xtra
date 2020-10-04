import React from 'react';
import { Route } from 'react-router-dom';
import CourseInformation from '../../../pages/course-Information/CourseInformation';
import AddUpdateCourseInfo from '../../../pages/course-Information/Add-update-course/AddUpdateCourseInfo';

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
