import React from 'react';
import InputField from '../../../../../components/inputs/input-field/InputField';
import SelectInput from '../../../../../components/inputs/select-input/SelectInput';
import SelectInputProps from '../../../../../components/inputs/selectProps/SelectInputProps';
import TextArea from '../../../../../components/inputs/text-area/TextArea';

import './generalDetails.style.scss';

const GeneralDetails = ({ categories, courseData, handdleChange }) => {
  const {
    title,
    minStudents,
    maxStudents,
    assignToClassComments,
    schedulingComments,
    active,
    catagory,
  } = courseData;
  return (
    <>
      <InputField
        name='title'
        value={title}
        type='text'
        label='שם הקורס'
        handleChange={handdleChange}
        hebrew='true'
      />

      <div className='general-first-row'>
        <SelectInputProps
          props={categories}
          name='catagory'
          selectTitle='בחר תחום'
          keyToValue='_id'
          keyToDisplay='title'
          label='תחום'
          value={catagory}
          handdleChange={handdleChange}
        />
        <InputField
          name='minStudents'
          type='number'
          label='מספר תלמידים מינמלי '
          hebrew='true'
          value={minStudents}
          handleChange={handdleChange}
          required
        />
        <InputField
          name='maxStudents'
          type='number'
          label='מספר תלמידים מקסימלי '
          hebrew='true'
          value={maxStudents}
          handleChange={handdleChange}
          required
        />
      </div>
      <SelectInput
        name='active'
        label='מוצג באתר'
        value={active}
        handleChange={handdleChange}
        required
      />
      <TextArea
        name='assignToClassComments'
        type='text'
        label='הערות לשיבוץ כיתה'
        value={assignToClassComments}
        handleChange={handdleChange}
        hebrew='true'
      />
      <InputField
        name='schedulingComments'
        type='text'
        value={schedulingComments}
        label='הערות לקביעת מועדי מפגשים'
        handleChange={handdleChange}
        hebrew='true'
      />
    </>
  );
};

export default GeneralDetails;
