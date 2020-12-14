import React, { useEffect, useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import TabsMenu from '../../../components/tabs-menu/TabsMenu';
import GeneralDetails from './course-tabs/general-details/GeneralDetails';
import WebsiteInfo from './course-tabs/WebsiteInfo';
import FilesTab from './course-tabs/FilesTab';
import InterestedList from './course-tabs/InterstedList';
import { withRouter } from 'react-router-dom';
import MyButton from '../../../components/My-button/MyButton';
import CustomAlert from '../../../components/custom-alert/CustomAlert';

const AddUpdateCourse = ({
  match,
  history,
  categories,
  lectures,
  searchField,
  getSingleCourse,
  clearSingle,
  singleCourse,
  addNewCourse,
  inProcess,
  updateCourse,
  lecturesLoading,
  couponsList,
  uploadCourseFile,
  deleteCourseFile,
  deleteList,
}) => {
  const courseID = match.params.courseID;
  useEffect(() => {
    if (courseID && !singleCourse) {
      getSingleCourse(courseID);
    }
    if (courseID) {
      return () => {
        clearSingle();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [alertView, setAlertView] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const [courseData, setCourseData] = useState({
    active: true,
    title: '',
    requirements: '',
    assignToClassComments: '',
    maxStudents: '',
    minStudents: '',
    schedulingComments: '',
    category: null,
    meetingLength: '',
    meetingsCount: '',
    target: '',
    progress: '',
    coupon: null,
    assignedLecturers: [],
    files: [],
    extTitles: {
      marketing: '',
      meetingLength: '',
      meetingsCount: '',
      progress: '',
      requirements: '',
      target: '',
      title: '',
    },
  });

  useEffect(() => {
    if (singleCourse) {
      const {
        title,
        active,
        requirements,
        assignToClassComments,
        marketing,
        maxStudents,
        minStudents,
        schedulingComments,
        category,
        meetingLength,
        meetingsCount,
        target,
        progress,
        assignedLecturers,
        coupon,
        files,
        extTitles,
      } = singleCourse;
      setCourseData({
        title,
        active,
        requirements,
        assignToClassComments,
        marketing,
        maxStudents: maxStudents === null ? '' : maxStudents,
        minStudents: minStudents === null ? '' : minStudents,
        schedulingComments,
        category,
        meetingLength: meetingLength === null ? '' : meetingLength,
        meetingsCount: meetingsCount === null ? '' : meetingsCount,
        target,
        progress,
        coupon,
        files: files ? files : [],
        assignedLecturers: assignedLecturers ? assignedLecturers : [],
        extTitles: {
          marketing: extTitles.marketing,
          progress: extTitles.progress,
          requirements: extTitles.requirements,
          title: extTitles.title,
          meetingLength: extTitles.meetingLength,
          meetingsCount: extTitles.meetingsCount,
          target: extTitles.target,
        },
      });
    }
  }, [singleCourse]);

  const { category } = courseData;
  useEffect(() => {
    //open alert on category change
    if (!firstLoad) {
      setAlertView(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  useEffect(() => {
    //close alert after confirmation
    if (alertView) {
      setAlertView(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseData]);

  const [currentTab, setCurrentTab] = useState(0);
  let tabLinks = ['פרטים כללים', 'מידע לאתר', 'קבצים', 'רשימת מתעניינים'];

  const changeTab = (i) => {
    if (!courseID) {
      return;
    } else {
      setCurrentTab(i);
    }
  };

  const goBack = () => {
    history.push('/courses');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'category' && firstLoad) {
      setFirstLoad(false);
    }
    if (name === 'coupon' && value === '') {
      setCourseData({ ...courseData, coupon: null });
    } else {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleNestedChange = (e) => {
    const { extTitles } = courseData;
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      extTitles: { ...extTitles, [name]: value },
    });
  };
  const { assignedLecturers } = courseData;

  const addLecture = (lectureID) => {
    if (assignedLecturers.includes(lectureID)) {
      return;
    }
    setCourseData({
      ...courseData,
      assignedLecturers: [...assignedLecturers, lectureID],
    });
  };

  const removeLecture = (lectureID) => {
    setCourseData({
      ...courseData,
      assignedLecturers: assignedLecturers.filter((item) => item !== lectureID),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!singleCourse) {
      try {
        await addNewCourse(courseData, history);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await updateCourse(courseID, courseData);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const closeAlert = () => {
    setAlertView(false);
  };

  const onAlertConfirm = () => {
    //set the fields after alert confirmation
    let selectedCategory = categories.find((item) => item._id === category);
    if (selectedCategory && !firstLoad) {
      let sc = selectedCategory.courseDefaults;
      setCourseData({
        ...courseData,
        minStudents: sc.minStudents === null ? '' : sc.minStudents,
        maxStudents: sc.maxStudents === null ? '' : sc.maxStudents,
        meetingLength:
          sc.session.length.value === null ? '' : sc.session.length.value,
        meetingsCount:
          sc.session.count.value === null ? '' : sc.session.count.value,
        target: sc.goals.value,
        requirements: sc.preliminaryKnowledge.value,
        marketing: sc.marketing,
        progress: sc.promotion.value,
        extTitles: {
          progress: sc.promotion.title,
          requirements: sc.preliminaryKnowledge.title,
          marketing: sc.marketing,
          meetingLength: sc.session.length.title,
          meetingsCount: sc.session.count.title,
          target: sc.goals.title,
        },
      });
    }
  };
  const filesList = courseData.files ? courseData.files : [];
  const toggleTab = () => {
    switch (currentTab) {
      case 0:
        return (
          <GeneralDetails
            categories={categories}
            courseData={courseData}
            handleChange={handleChange}
            couponsList={couponsList}
          />
        );
      case 1:
        return (
          <WebsiteInfo
            handleNestedChange={handleNestedChange}
            addLecture={addLecture}
            removeLecture={removeLecture}
            lectures={lectures}
            searchField={searchField}
            courseData={courseData}
            handleChange={handleChange}
            lecturesLoading={lecturesLoading}
          />
        );
      case 2:
        return (
          <FilesTab
            courseID={courseID}
            uploadCourseFile={uploadCourseFile}
            filesList={filesList}
            deleteCourseFile={deleteCourseFile}
            deleteList={deleteList}
            inProcess={inProcess}
          />
        );
      case 3:
        return <InterestedList />;
      default:
        return null;
    }
  };
  const alertText = {
    title: 'אזהרה',
    heading: 'האם לייבא שדות מתוך תחום?',
    span: 'שדות לא שמורים ימחקו',
  };
  return (
    <>
      <CustomAlert
        alertView={alertView}
        alertText={alertText}
        closeAlert={closeAlert}
        onConfirm={onAlertConfirm}
      />

      <UpdatePageContainer>
        <TabsMenu
          isUpdatePage={courseID}
          currentTab={currentTab}
          tabLinks={tabLinks}
          changeTab={changeTab}
        />
        <form onSubmit={handleSubmit}>
          {toggleTab()}
          {currentTab === 3 || currentTab === 2 ? null : (
            <div className='buttons'>
              <MyButton onClick={() => goBack()} type='button' forgot>
                חזרה
              </MyButton>
              <MyButton save loading={inProcess}>
                שמור
              </MyButton>
            </div>
          )}
        </form>
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateCourse);
