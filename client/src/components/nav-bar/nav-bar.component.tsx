import React, { Component } from 'react'
import fevoLogo from '../../assets/media/fevo_white.png';

export default class NavBar extends Component {
  render() {
    return (
      <nav className='navbar is-dark' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a className='navbar-item' href='/'>
            <img src={fevoLogo} alt='fevo logo'/>
          </a>
  
          <button className='navbar-burger burger' aria-label='menu' aria-expanded='false'>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
            <span aria-hidden='true'></span>
          </button>
        </div>
  
    <div className='navbar-menu'>
      <div className='navbar-end'>
        <div className='navbar-item'>
          <div className='buttons'>
            <a href='/auth/logout' className='button is-primary'>
              Log out
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
        )
    }
}
