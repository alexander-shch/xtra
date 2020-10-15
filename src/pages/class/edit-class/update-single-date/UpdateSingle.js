import React from 'react';
import DataInput from '../../../../components/inputs/date-input/DateInput';
import MyButton from '../../../../components/My-button/MyButton';
import './updateSingle.style.scss';

const UpdateSingle = ({
  dateHanddleChange,
  dateDetails,
  openDeleteBox,
  closeSingleBox,
  handleDatesSubmit,
}) => {
  const { from, availabilityId, fromTime, toTime } = dateDetails;
  let today = new Date().toISOString().slice(0, 10);
  return (
    <div className='updateSingle'>
      <h3>עידכון זמינות</h3>
      <form onSubmit={handleDatesSubmit} className='dateForm'>
        <DataInput
          handleChange={dateHanddleChange}
          name='from'
          label='מתאריך'
          type='date'
          value={from}
          min={today}
        />

        <DataInput
          handleChange={dateHanddleChange}
          name='fromTime'
          label='משעה'
          type='time'
          value={fromTime}
        />

        <DataInput
          handleChange={dateHanddleChange}
          name='toTime'
          label='עד שעה'
          type='time'
          value={toTime}
        />
        <div className='singleBtns'>
          <MyButton>עדכן</MyButton>
          <MyButton type='button' onClick={closeSingleBox} forgot>
            חזרה
          </MyButton>
          {availabilityId ? (
            <MyButton delete onClick={openDeleteBox} type='button'>
              מחק זמינות
            </MyButton>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default UpdateSingle;
