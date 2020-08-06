import React from 'react';
import './buildingItem.style.scss';

const BuildingItem = ({ item }) => {
  return (
    <div className='buildingItem'>
      <span className='itemName'>{item.name}</span>
      <div className='buildingButtons'>
        <button className='button editButton'> &#9998;</button>
        <button className='button deleteButton'>&#10008;</button>
      </div>
    </div>
  );
};

export default BuildingItem;
