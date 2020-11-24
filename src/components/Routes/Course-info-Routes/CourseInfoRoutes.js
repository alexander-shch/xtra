import React from 'react';
import { Route } from 'react-router-dom';
import CourseInformation from '../../../pages/Course-Information/CourseInformation';
import AddUpdateCourseInfo from '../../../pages/Course-Information/Add-update-course/AddUpdateCourseInfo';

const CourseInfoRoutes = ({ match }) => {
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

export default CourseInfoRoutes;
