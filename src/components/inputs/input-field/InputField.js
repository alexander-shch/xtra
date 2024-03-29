import React from 'react';

import './inputField.style.scss';

const InputField = ({ handleChange, label, placeholder, ...restData }) => {
  const setClass = (restData) => {
    if (restData.withbutton) {
      return 'withButton';
    }
    if (restData.file) {
      return 'file';
    } else {
      return '';
    }
  };

  return (
    <div className={`groupInput ${setClass(restData)}`}>
      <label className='form-input-label'>
        {label}
        {restData.required ? <span className='requiredField'>*</span> : ''}
      </label>
      <div
        className={`input-continer ${restData.withbutton ? 'withButton' : ''}`}
      >
        <input
          className={`form-input  ${restData.withbutton ? 'withButton' : ''} 
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
