import React from 'react';
import './dateInput.scss';
const DataInput = ({ handleChange, label, ...restData }) => {
  return (
    <div className='groupDateInput'>
      <label className='date-input-label'>{label}</label>
      <div className='Dateinput-continer'>
        <input className='date-input' onChange={handleChange} {...restData} />
      </div>
    </div>
  );
};

export default DataInput;
