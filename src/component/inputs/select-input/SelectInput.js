import React from 'react';
import './selectInput.style.scss';
const SelectInput = ({ handleChange, label, ...restData }) => {
  return (
    <div className='selectGroupInput'>
      <label className='selectInputLabael'>{label}</label>
      <div className='selctorContainer'>
        <select className='selector' onChange={handleChange} {...restData}>
          <option value={true}>כן</option>
          <option value={false}>לא</option>
        </select>
      </div>
    </div>
  );
};

export default SelectInput;
