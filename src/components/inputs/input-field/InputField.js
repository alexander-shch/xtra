import React from 'react';

import './inputField.style.scss';

const InputField = ({ handleChange, label, ...restData }) => {
  return (
    <div className='groupInput'>
      <label className='form-input-label'>
        {restData.required ? <span className='requiredField'>*</span> : ''}
        {label}
      </label>
      <div className='input-continer'>
        <input
          className={`form-input  ${restData.hebrew ? 'hebrewInput' : ''} 
           ${restData.required && !restData.value ? 'redBorder' : ''}
          `}
          onChange={handleChange}
          {...restData}
        />
      </div>
    </div>
  );
};

export default InputField;
