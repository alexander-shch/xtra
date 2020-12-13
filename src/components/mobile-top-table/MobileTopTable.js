import React from 'react';
import './mobileTop.style.scss';
const MobileTopTable = ({ width, props }) => {
  return width <= 800 ? (
    <div className='mobileTop'>
      {props.map((item) => (
        <span className='mobileTitle'> {item}</span>
      ))}
    </div>
  ) : null;
};

export default MobileTopTable;
