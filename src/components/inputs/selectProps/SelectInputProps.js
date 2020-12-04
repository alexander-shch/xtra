import React from 'react';
import './selectProps.style.scss';

const SelectInputProps = ({
  props,
  name,
  value,
  selectTitle,
  keyToDisplay,
  label,
  keyToValue,
  handleChange,
}) => {
  return (
    <div className='selectInput'>
      <label className='selectInputLabel'>{label}</label>
      <select
        required
        name={name}
        className='Selector'
        value={value ? value : '1'}
        onChange={handleChange}
      >
        <option value='1' disabled hidden>
          {selectTitle}
        </option>
        {props.map((item, index) => (
          <option key={index} value={item[keyToValue]}>
            {item[keyToDisplay]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInputProps;
