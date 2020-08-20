import React from 'react';
import './buildingItem.style.scss';
import { withRouter } from 'react-router-dom';

const BuildingItem = ({ match, history, item, openBox }) => {
  return (
    <div className='buildingItem'>
      <span className='itemName'>{item.name}</span>
      <div className='buildingButtons'>
        <button
          onClick={() => history.push(`${match.path}/updateBuilding`, item)}
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

export default withRouter(BuildingItem);
