import React from 'react';

import './inputField.style.scss';

const InputField = ({ handleChange, label, placeholder, ...restData }) => {
  return (
    <div className='groupInput'>
      <label className='form-input-label'>
        {label}
        {restData.required ? <span className='requiredField'>*</span> : ''}
      </label>
      <div className='input-continer'>
        <input
          className={`form-input  ${restData.hebrew ? 'hebrewInput' : ''} 
           ${restData.required && !restData.value ? 'redBorder' : ''}
          `}
          placeholder={placeholder ? placeholder : ''}
          onChange={handleChange}
          {...restData}
        />
      </div>
    </div>
  );
};

export default InputField;
