import React, { useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import TabsMenu from '../../../components/tabs-menu/TabsMenu';
import GeneralDetails from './course-tabs/general-details/GeneralDetails';
import WebsiteInfo from './course-tabs/WebsiteInfo';
import FilesTab from './course-tabs/FilesTab';
import InterestedList from './course-tabs/InterstedList';

const AddUpdateCourse = ({ categories }) => {
  const [currentTab, setCurrentTab] = useState('פרטים כללים');
  let tabLinks = ['פרטים כללים', 'מידע לאתר', 'קבצים', 'רשימת מתעניינים'];

  const toggleTab = () => {
    switch (currentTab) {
      case 'פרטים כללים':
        return <GeneralDetails categories={categories} />;
      case 'מידע לאתר':
        return <WebsiteInfo />;
      case 'קבצים':
        return <FilesTab />;
      case 'רשימת מתעניינים':
        return <InterestedList />;
      default:
        return null;
    }
  };
  return (
    <>
      <TabsMenu
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabLinks={tabLinks}
      />
      <UpdatePageContainer>{toggleTab()}</UpdatePageContainer>
    </>
  );
};

export default AddUpdateCourse;
