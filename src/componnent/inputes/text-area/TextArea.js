import React from 'react';
import '../input-field/inputField.style.scss'; //same style as text input field

const TextArea = ({ handleChange, label, ...restData }) => {
  return (
    <div className='groupInput'>
      <label className='form-input-label'>{label}</label>
      <div className='input-continer'>
        <textarea
          className={`form-input ${restData.hebrew ? 'hebrewInput' : ''} ${
            restData.small ? 'small' : ''
          }`}
          onChange={handleChange}
          {...restData}
        />
      </div>
    </div>
  );
};

export default TextArea;
