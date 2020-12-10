import React from 'react';
import DateInput from '../../../../components/inputs/date-input/DateInput';
import MyButton from '../../../../components/My-button/MyButton';
import './updateSingle.style.scss';

const UpdateSingle = ({
  dateHandleChange,
  dateDetails,
  openDeleteBox,
  closeSingleBox,
  handleDatesSubmit,
  view,
}) => {
  const { from, availabilityId, fromTime, toTime } = dateDetails;
  let today = new Date().toISOString().slice(0, 10);
  return view ? (
    <div className='updateSingle'>
      <h3>עידכון זמינות</h3>
      <form onSubmit={handleDatesSubmit} className='dateForm'>
        <DateInput
          handleChange={dateHandleChange}
          name='from'
          label='מתאריך'
          type='date'
          value={from}
          min={today}
        />

        <DateInput
          handleChange={dateHandleChange}
          name='fromTime'
          label='משעה'
          type='time'
          value={fromTime}
        />

        <DateInput
          handleChange={dateHandleChange}
          name='toTime'
          label='עד שעה'
          type='time'
          value={toTime}
        />
        <div className='singleBtns'>
          {availabilityId ? (
            <MyButton delete onClick={openDeleteBox} type='button'>
              מחק זמינות
            </MyButton>
          ) : null}
          <MyButton>עדכן</MyButton>
          <MyButton type='button' onClick={closeSingleBox} forgot>
            חזרה
          </MyButton>
        </div>
      </form>
    </div>
  ) : null;
};

export default UpdateSingle;
