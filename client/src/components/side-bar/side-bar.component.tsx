import React, { Component } from 'react';
import { adminAppRoutes, AppRoute } from '../../app-router';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './side-bar.component.scss';

export default class SideBar extends Component {
  render() {
    return (
      <aside className='sidebar menu'>
        <ul className='menu-list'>
          {adminAppRoutes.map((route: AppRoute, index: number) => {
            return route.title && <li key={index}>
              <NavLink
                to={route.path}
                exact={route.exact}
                activeClassName='is-active'>
                { route.icon &&
                  <span className='icon has-text-grey-light is-medium'>
                    <FontAwesomeIcon icon={route.icon} />
                  </span>
                }
                <span>{route.title}</span>
              </NavLink>
            </li>}
          )}
        </ul>
      </aside>
  )}
}
