import React from 'react';
import './buildingItem.style.scss';

const BuildingItem = ({ item }) => {
  return (
    <div className='buildingItem'>
      <span className='itemName'>{item.name}</span>
    </div>
  );
};

export default BuildingItem;
