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
  inProcsess,
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
    catagory: null,
    meetingLength: '',
    meetingsCount: '',
    target: '',
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
        catagory,
        meetingLength,
        meetingsCount,
        target,
        extTitles,
      } = singleCourse;
      setCourseData({
        title,
        active,
        requirements,
        assignToClassComments,
        marketing,
        maxStudents,
        minStudents,
        schedulingComments,
        catagory,
        meetingLength,
        meetingsCount,
        target,
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

  const { catagory } = courseData;
  useEffect(() => {
    //open alert on catagory change
    if (!firstLoad) {
      setAlertView(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [catagory]);

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

  const handdleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'catagory' && firstLoad) {
      setFirstLoad(false);
    }
    setCourseData({ ...courseData, [name]: value });
  };

  const handdleNestedChange = (e) => {
    const { extTitles } = courseData;
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      extTitles: { ...extTitles, [name]: value },
    });
  };
  const handdleSubmit = async (e) => {
    e.preventDefault();
    if (!singleCourse) {
      try {
        await addNewCourse(courseData, history);
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
    let selectedCatagory = categories.find((item) => item._id === catagory);
    if (selectedCatagory && !firstLoad) {
      let sc = selectedCatagory.courseDefaults;
      setCourseData({
        ...courseData,
        minStudents: sc.minStudents,
        maxStudents: sc.maxStudents,
        meetingLength: sc.session.length.value,
        meetingsCount: sc.session.count.value,
        target: sc.goals.value,
        requirements: sc.preliminaryKnowledge.value,
        marketing: sc.marketing,
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

  const toggleTab = () => {
    switch (currentTab) {
      case 0:
        return (
          <GeneralDetails
            categories={categories}
            courseData={courseData}
            handdleChange={handdleChange}
          />
        );
      case 1:
        return (
          <WebsiteInfo
            handdleNestedChange={handdleNestedChange}
            lectures={lectures}
            searchField={searchField}
            courseData={courseData}
            handdleChange={handdleChange}
          />
        );
      case 2:
        return <FilesTab />;
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
        <form onSubmit={handdleSubmit}>
          {toggleTab()}
          {currentTab === 3 ? null : (
            <div className='buttons'>
              <MyButton save loading={inProcsess}>
                שמור
              </MyButton>
              <MyButton onClick={() => goBack()} type='button' forgot>
                חזרה
              </MyButton>
            </div>
          )}
        </form>
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateCourse);
