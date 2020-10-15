import React from 'react';
import DataInput from '../../../../components/inputs/date-input/DateInput';
import MyButton from '../../../../components/My-button/MyButton';
import './secondForm.style.scss';
const SecondForm = ({
  dateHanddleChange,
  handleDatesSubmit,
  onDayChange,
  dateDetails,
}) => {
  const { from, to, fromTime, toTime, dayLimiter } = dateDetails;
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
          multiple
          onChange={onDayChange}
          name='limiter'
          className='daySelector'
          value={dayLimiter}
        >
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
