import React from 'react';
import DateInput from '../../../../../components/inputs/date-input/DateInput';
import { FormContainer } from './meetingStyle';

const MeetingForm = () => {
  return (
    <FormContainer>
      <DateInput label='תאריך התחלה' />
      <DateInput label='תאריך סיום' />
      <DateInput type='time' label='שעת פתיחה' />
      <DateInput type='time' label='שעת סיום' />
    </FormContainer>
  );
};

export default MeetingForm;
