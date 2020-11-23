import React, { useState } from 'react';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import TabsMenu from '../../../components/tabs-menu/TabsMenu';
import GeneralDetails from './course-tabs/general-details/GeneralDetails';
import WebsiteInfo from './course-tabs/WebsiteInfo';
import FilesTab from './course-tabs/FilesTab';
import InterestedList from './course-tabs/InterstedList';
import { withRouter } from 'react-router-dom';

const AddUpdateCourse = ({ history, categories, lectures, searchField }) => {
  const [currentTab, setCurrentTab] = useState(0);
  let tabLinks = ['פרטים כללים', 'מידע לאתר', 'קבצים', 'רשימת מתעניינים'];

  const goBack = () => {
    history.push('/courses');
  };

  const toggleTab = () => {
    switch (currentTab) {
      case 0:
        return <GeneralDetails categories={categories} goBack={goBack} />;
      case 1:
        return (
          <WebsiteInfo
            goBack={goBack}
            lectures={lectures}
            searchField={searchField}
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
  return (
    <>
      <UpdatePageContainer>
        <TabsMenu
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tabLinks={tabLinks}
        />
        {toggleTab()}
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateCourse);
