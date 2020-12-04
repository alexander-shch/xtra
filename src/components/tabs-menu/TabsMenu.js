import React from 'react';
import './tabsMenu.style.scss';

const TabsMenu = ({ currentTab, tabLinks, isUpdatePage, changeTab }) => {
  const setClass = (i) => {
    if (isUpdatePage) {
      return currentTab === i ? 'active' : '';
    } else if (!isUpdatePage) {
      return currentTab === i ? 'active' : 'disable';
    }
  };
  return (
    <div className='tabs-container'>
      <div className='tabs-links'>
        {tabLinks.map((tab, i) => (
          <span className={setClass(i)} key={tab} onClick={() => changeTab(i)}>
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TabsMenu;
