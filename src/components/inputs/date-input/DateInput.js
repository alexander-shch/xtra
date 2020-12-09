import React from 'react';
import './dateInput.scss';
const DateInput = ({ handleChange, label, ...restData }) => {
  return (
    <div className='groupDateInput'>
      <label className='date-input-label'>{label}</label>
      <div className='Dateinput-continer'>
        <input
          type='date'
          className='date-input'
          onChange={handleChange}
          {...restData}
        />
      </div>
    </div>
  );
};

export default DateInput;
