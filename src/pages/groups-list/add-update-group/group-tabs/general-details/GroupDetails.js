import React from 'react';
import { InputFlex } from '../../../../../components/global-style/formsStyle';
import DateInput from '../../../../../components/inputs/date-input/DateInput';
import InputField from '../../../../../components/inputs/input-field/InputField';
import SelectInput from '../../../../../components/inputs/select-input/SelectInput';
import LectureSelector from '../../../../../components/lexture-selctor/LectureSelector';

const GroupDetails = ({
  lectures,
  removeLecture,
  addLecture,
  groupData,
  searchField,
  lecturesLoading,
}) => {
  const { assignedLecturers } = groupData;
  return (
    <>
      <InputFlex>
        <InputField type='text' label='שם הקבוצה' />
        <InputField type='text' label='שם הקורס' />
        <InputField type='text' label='שנת לימודים' />
        <InputField type='text' label='תנאי הקורס' />

        <InputField type='number' label='מספר תלמידים מינמלי' />
        <InputField type='number' label='מספר תלמידים מקסימלי' />
        <DateInput label='תאריך פתיחה' />
      </InputFlex>
      <LectureSelector
        addLecture={addLecture}
        removeLecture={removeLecture}
        assignedLecturers={assignedLecturers}
        lectures={lectures}
        searchField={searchField}
        lecturesLoading={lecturesLoading}
      />
      <SelectInput name='active' label='פעיל' />
      <SelectInput name='active' label='פתוח להרשמה' />
      <SelectInput name='active' label='מוצג באתר' />
    </>
  );
};

export default GroupDetails;
