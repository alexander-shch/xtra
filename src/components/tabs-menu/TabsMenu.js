import React from 'react';
import './tabsMenu.style.scss';

const TabsMenu = ({ currentTab, setCurrentTab, tabLinks }) => {
  return (
    <div className='tabs-container'>
      <div className='tabs-links'>
        {tabLinks.map((tab) => (
          <span
            className={currentTab === `${tab}` ? 'active' : ''}
            key={tab}
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TabsMenu;
