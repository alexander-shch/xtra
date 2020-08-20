import React from 'react';
import DataInput from '../../date-input/DateInput';
import MyButton from '../../My-button/MyButton';
import './secondForm.style.scss';
const SecondForm = () => {
  return (
    <form className='dateForm'>
      <DataInput label='מתאריך' type='date' />
      <DataInput label='עד תאריך' type='date' />
      <DataInput label='משעה' type='time' />
      <DataInput label='עד שעה' type='time' />
      <MyButton>עדכן</MyButton>
    </form>
  );
};

export default SecondForm;
