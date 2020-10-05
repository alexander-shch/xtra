import React from 'react';

import './inputField.style.scss';

const InputField = ({ handleChange, label, ...restData }) => {
  return (
    <div className='groupInput'>
      <label className='form-input-label'>{label}</label>
      <div className='input-continer'>
        <input
          className={`form-input ${restData.hebrew ? 'hebrewInput' : ''} ${
            restData.type === 'text' ? 'textInput' : ''
          }`}
          onChange={handleChange}
          {...restData}
        />
      </div>
    </div>
  );
};

export default InputField;
