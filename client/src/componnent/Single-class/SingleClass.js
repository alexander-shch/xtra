import React from 'react';
import './SingleClass.style.scss';
import { withRouter } from 'react-router-dom';

const SingleClass = ({ item, match, history, openBox }) => {
  return (
    <div className='classItem'>
      <span className='className'>{item.building.name}</span>
      <span className='className'>{item.name}</span>
      <div className='classButtons'>
        <button
          onClick={() => history.push(`${match.path}/updateClasses`, item)}
          className='button editButton'
        >
          &#9998;
        </button>
        <button onClick={() => openBox(item)} className='button deleteButton'>
          &#10008;
        </button>
      </div>
    </div>
  );
};

export default withRouter(SingleClass);
