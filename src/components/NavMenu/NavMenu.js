import React from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.style.scss';
import { connect } from 'react-redux';
import { onsignOut } from '../../Redux/userReducer/user.actions';
import { toggleView } from '../../Redux/settingsView/settings.actions';
import Settings from '../settings/Settings';
import { useLocation } from 'react-router-dom';

const NavMenu = ({ signOut, toggleView, settingsView, userName }) => {
  const navMenuArray = [
    { linkTitle: 'לובי', linkUrl: '/', className: 'single-link' },
    { linkTitle: 'קורסים', linkUrl: '/courses', className: 'single-link' },
    { linkTitle: 'קבוצות', linkUrl: '/groups', className: 'single-link' },
    { linkTitle: 'מרצים', linkUrl: '/lecturers', className: 'single-link' },
    { linkTitle: 'נרשמים', linkUrl: '/a', className: 'single-link' },
    { linkTitle: 'דוחות', linkUrl: '/b', className: 'single-link' },
    { linkTitle: 'תשלומים', linkUrl: '/c', className: 'single-link' },
    { linkTitle: 'דרושים', linkUrl: '/d', className: 'single-link' },
  ];
  const location = useLocation();

  let path = location.pathname;

  const setActive = (string) => {
    if (string.length === 1) {
      return string;
    } else {
      let splitString = string.split('/');
      return '/' + splitString[1];
    }
  };
  const menuLinks = navMenuArray.map(
    ({ className, linkTitle, linkUrl }, index) => (
      <Link
        className={`${className} ${
          setActive(path) === linkUrl ? 'active' : ''
        }`}
        to={linkUrl}
        key={index}
      >
        {linkTitle}
      </Link>
    )
  );

  return (
    <>
      <span className='greetUser'>שלום, {userName}</span>
      <div className='menu-container'>
        <div className='menu-links-container'>{menuLinks}</div>
        <div className='icon-menu-container'>
          <div className='iconLink settings-icon' onClick={() => toggleView()}>
            &#9881;
          </div>
          <div className='iconLink' onClick={() => signOut()}>
            SIGN OUT
          </div>
          {settingsView ? <Settings toggleView={toggleView} /> : null}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(onsignOut()),
  toggleView: () => dispatch(toggleView()),
});

const mapStateToProps = (state) => ({
  settingsView: state.toggleSettingsView.hidden,
  userName: state.user.userLoged.name,
});

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
