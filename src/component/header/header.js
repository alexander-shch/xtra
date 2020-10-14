import React from 'react';
import NavMenu from '../navMenu/navMenu';

import './header.style.scss';

const Header = () => {
  return (
    <div className='header-container'>
      <NavMenu />
    </div>
  );
};

export default React.memo(Header);
