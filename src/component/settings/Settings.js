import React from 'react';
import './settings.style.scss';
import { Link } from 'react-router-dom';
import { settingsMenuArray } from './settingsLinkData';

const Settings = ({ toggleView }) => {
  let settingsLinks = settingsMenuArray.map(
    ({ linkUrl, linkTitle, className }, index) => (
      <Link key={index} to={linkUrl} className={className}>
        {linkTitle}
      </Link>
    )
  );
  return (
    <div onClick={() => toggleView()} className='menu-module'>
      <div className='settings-container'>{settingsLinks}</div>
    </div>
  );
};

export default Settings;
