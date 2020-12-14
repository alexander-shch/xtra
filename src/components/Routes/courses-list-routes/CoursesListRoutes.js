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
  deleteCourse,
  updateCourse,
  uploadCourseFile,
  deleteCourseFile,
} from '../../../Redux/course-list/courseList.action';
import DeleteBox from '../../delete-box/DeleteBox';
import { closeConfirmMessage } from '../../../Redux/on-delete/delete.action';
import { getAllCoupons } from '../../../Redux/coupons/coupons.actions';

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
  inProcess,
  deleteCourse,
  confirmMessageData,
  closeConfirmMessage,
  updateCourse,
  lecturesLoading,
  getAllCoupons,
  couponsList,
  uploadCourseFile,
  deleteCourseFile,
  OnDeleteFunction,
  courseID,
  deleteList,
}) => {
  useEffect(() => {
    getCategories();
    getLectures();
    getCourseList();
    getAllCoupons();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteFunctions = {
    deleteCourse: deleteCourse,
    deleteCourseFile: deleteCourseFile,
  };
  return (
    <>
      <DeleteBox
        confirmMessageData={confirmMessageData}
        closeConfirmMessage={closeConfirmMessage}
        deleteFunction={deleteFunctions[OnDeleteFunction]}
        pageID={courseID}
      />
      <Route
        exact
        path={`${match.path}`}
        render={() => (
          <CoursesList
            searchField={searchField}
            courseList={courseList}
            listLoading={listLoading}
            categories={categories}
            deleteCourse={deleteCourse}
            deleteList={deleteList}
          />
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
            inProcess={inProcess}
            couponsList={couponsList}
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
            updateCourse={updateCourse}
            inProcess={inProcess}
            lecturesLoading={lecturesLoading}
            couponsList={couponsList}
            uploadCourseFile={uploadCourseFile}
            deleteCourseFile={deleteCourseFile}
            deleteList={deleteList}
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
  inProcess: state.courseList.inProcess,
  confirmMessageData: state.delete,
  lecturesLoading: state.lectures.listLoading,
  couponsList: state.coupons.couponsList,
  OnDeleteFunction: state.delete.addDeleteFunction,
  courseID: state.delete.pageID,
  deleteList: state.courseList.deleteList,
});

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(getCategories()),
  getLectures: () => dispatch(getLectures()),
  getCourseList: () => dispatch(getCourseList()),
  getSingleCourse: (id) => dispatch(getSingleCourse(id)),
  clearSingle: () => dispatch(clearSingle()),
  addNewCourse: (data, history) => dispatch(addNewCourse(data, history)),
  deleteCourse: (id) => dispatch(deleteCourse(id)),
  closeConfirmMessage: () => dispatch(closeConfirmMessage()),
  updateCourse: (id, data) => dispatch(updateCourse(id, data)),
  getAllCoupons: () => dispatch(getAllCoupons()),
  uploadCourseFile: (courseID, formData) =>
    dispatch(uploadCourseFile(courseID, formData)),
  deleteCourseFile: (courseID, fileID) =>
    dispatch(deleteCourseFile(courseID, fileID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoursesListRoutes);
