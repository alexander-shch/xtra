import React from 'react';
import DataInput from '../../inputes/date-input/DateInput';
import MyButton from '../../My-button/MyButton';
import './secondForm.style.scss';
const SecondForm = ({ dateHanddleChange, handleDatesSubmit, dateDetails }) => {
  const { from, to, fromTime, toTime, daysLimiter } = dateDetails;
  const dayObj = {
    0: 'יום ראשון',
    1: 'יום שני',
    2: 'יום שלישי',
    3: 'יום רביעי',
    4: 'יום חמישי',
    5: 'יום שישי',
  };
  let today = new Date().toISOString().slice(0, 10);

  return (
    <>
      <h4>זמינות</h4>
      <form onSubmit={handleDatesSubmit} className='dateForm'>
        <DataInput
          handleChange={dateHanddleChange}
          name='from'
          value={from}
          label='מתאריך'
          type='date'
          min={today}
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='to'
          value={to}
          label='עד תאריך'
          type='date'
          min={from}
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='fromTime'
          value={fromTime}
          label='משעה'
          type='time'
        />
        <DataInput
          handleChange={dateHanddleChange}
          name='toTime'
          value={toTime}
          label='עד שעה'
          type='time'
        />
        <select
          onChange={dateHanddleChange}
          name='daysLimiter'
          className='daySelector'
          value={daysLimiter}
        >
          <option value='select' disabled>
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
