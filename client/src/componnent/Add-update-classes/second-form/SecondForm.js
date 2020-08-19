import React from 'react';
import DataInput from '../../date-input/DateInput';
import './secondForm.style.scss';
const SecondForm = () => {
  return (
    <div className='secondForm'>
      <DataInput label='מתאריך' type='date' />
      <DataInput label='עד תאריך' type='date' />
      <DataInput label='משעה' type='time' />
      <DataInput label='עד שעה' type='time' />
    </div>
  );
};

export default SecondForm;
