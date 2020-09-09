import React from 'react';
import DataInput from '../../inputes/date-input/DateInput';
import MyButton from '../../My-button/MyButton';
import './secondForm.style.scss';
const SecondForm = ({ dateHanddleChange, handleDatesSubmit }) => {
  const dayObj = {
    sun: 'יום ראשון',
    mon: 'יום שני',
    tue: 'יום שלישי',
    wed: 'יום רביעי',
    thu: 'יום חמישי',
    fri: 'יום שישי',
  };
  let today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <h4>זמינות</h4>
      <form onSubmit={handleDatesSubmit} className='dateForm'>
        <DataInput
          handleChange={dateHanddleChange}
          name='from'
          label='מתאריך'
          type='date'
          min={today}
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='to'
          label='עד תאריך'
          type='date'
          min={today}
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='fromTime'
          label='משעה'
          type='time'
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='toTime'
          label='עד שעה'
          type='time'
        />
        <select name='day' className='daySelector' defaultValue='1'>
          <option value='1' disabled>
            בחר יום
          </option>
          {Object.keys(dayObj).map((day) => (
            <option key={day} value={day}>
              {dayObj[day]}
            </option>
          ))}
        </select>
        <MyButton>עדכן</MyButton>
      </form>
    </>
  );
};

export default SecondForm;
