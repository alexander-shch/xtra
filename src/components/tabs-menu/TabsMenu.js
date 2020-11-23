import React from 'react';
import './tabsMenu.style.scss';

const TabsMenu = ({ currentTab, setCurrentTab, tabLinks }) => {
  return (
    <div className='tabs-container'>
      <div className='tabs-links'>
        {tabLinks.map((tab, i) => (
          <span
            className={currentTab === i ? 'active' : ''}
            key={tab}
            onClick={() => setCurrentTab(i)}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TabsMenu;
