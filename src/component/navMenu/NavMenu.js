import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSignOut } from '../../redux/userReducer/user.actions';
import { toggleView } from '../../redux/settingsView/settings.actions';
import Settings from '../settings/Settings';

import './navMenu.style.scss';

const NavMenu = ({ signOut, toggleView, settingsView, userName }) => {
  const navMenuArray = [
    { linkTitle: 'לובי', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'קורסים', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'מרצים', linkUrl: '/lecturers', className: 'single-link' },
    { linkTitle: 'נרשמים', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'דוחות', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'תשלומים', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'דרושים', linkUrl: '/', className: 'single-link' },
  ];

  const menuLinks = navMenuArray.map(
    ({ className, linkTitle, linkUrl }, index) => (
      <Link className={className} to={linkUrl} key={index}>
        {linkTitle}
      </Link>
    )
  );

  return (
    <>
      <span className='greetUser'>{userName},שלום</span>
      <div className='menu-container'>
        <div className='menu-links-container'>{menuLinks}</div>
        <div className='icon-menu-container'>
          <div className='iconLink' onClick={() => signOut()}>
            SIGN OUT
          </div>
          <div className='iconLink settings-icon' onClick={() => toggleView()}>
            &#9881;
          </div>
          {settingsView ? <Settings toggleView={toggleView} /> : null}
        </div>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(onSignOut()),
  toggleView: () => dispatch(toggleView()),
});

const mapStateToProps = (state) => ({
  settingsView: state.toggleSettingsView.hidden,
  userName: state.user.userLoged.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
