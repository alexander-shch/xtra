import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import TabsMenu from '../../../components/tabs-menu/TabsMenu';
import MeetingDates from './group-tabs/meeting-dates/MeetingDates';
import GroupDetails from './group-tabs/general-details/GroupDetails';

const AddUpdateGroup = ({
  match,
  lectures,
  lectureLoading,
  couponsList,
  lecturesLoading,
  searchField,
}) => {
  //   const groupID = match.params.groupID;
  const groupID = true;
  const [groupData, setGroupData] = useState({
    assignedLecturers: [],
  });
  const { assignedLecturers } = groupData;
  const addLecture = (lectureID) => {
    if (assignedLecturers.includes(lectureID)) {
      return;
    }
    setGroupData({
      ...groupData,
      assignedLecturers: [...assignedLecturers, lectureID],
    });
  };

  const removeLecture = (lectureID) => {
    setGroupData({
      ...groupData,
      assignedLecturers: assignedLecturers.filter((item) => item !== lectureID),
    });
  };

  const [currentTab, setCurrentTab] = useState(0);
  let tabLinks = [
    'פרטים כללים',
    'מועדי מפגשים ',
    'תקציב',
    'בונסים',
    'מתעניינים',
  ];

  const changeTab = (i) => {
    if (!groupID) {
      return;
    } else {
      setCurrentTab(i);
    }
  };

  const toggleTab = () => {
    switch (currentTab) {
      case 0:
        return (
          <GroupDetails
            lectures={lectures}
            lectureLoading={lectureLoading}
            couponsList={couponsList}
            addLecture={addLecture}
            removeLecture={removeLecture}
            groupData={groupData}
            lecturesLoading={lecturesLoading}
            searchField={searchField}
          />
        );
      case 1:
        return <MeetingDates />;
      case 2:
        return <h1>תקציב</h1>;
      case 3:
        return <h1>בונסים</h1>;
      case 4:
        return <h1>רשימת ממתינים</h1>;
      default:
        return null;
    }
  };
  return (
    <UpdatePageContainer>
      <TabsMenu
        isUpdatePage={groupID}
        tabLinks={tabLinks}
        currentTab={currentTab}
        changeTab={changeTab}
      />
      {toggleTab()}
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateGroup);
