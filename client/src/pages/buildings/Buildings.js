import React from 'react';
import BuildingItem from '../../componnent/Building-item/BuildingItem';
import './buildings.style.scss';
import MyButton from '../../componnent/My-button/MyButton';

const Buildings = ({ data }) => {
  return (
    <div className='buildingPage'>
      <MyButton addButtonStyle>הוסף בניין</MyButton>
      <h4 className='buildingsTitle'>רשימה</h4>
      <div className='buildingHead'>
        <div className='headerBlock'>
          <span>שם הבניין</span>
        </div>
        <div className='headerBlock'>
          <span>אפשרויות</span>
        </div>
      </div>
      {data.map((item) => (
        <BuildingItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default Buildings;
