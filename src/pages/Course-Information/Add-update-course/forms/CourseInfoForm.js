import React from 'react';
import InputField from '../../../../components/inputs/input-field/InputField';
import SelectInput from '../../../../components/inputs/select-input/SelectInput';
import './CourseInfoForm.style.scss';

const CourseInfoForm = ({ courseDetails, handleChange }) => {
  const { title, active, email, subject } = courseDetails;
  return (
    <>
      <InputField
        name='title'
        type='text'
        label='כותרת'
        value={title}
        handleChange={handleChange}
        hebrew='true'
        required
      />
      <div className='inputsFlexContainer'>
        <InputField
          name='email'
          type='email'
          label='דוא"ל'
          value={email}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='subject'
          type='text'
          label='נושא'
          value={subject}
          handleChange={handleChange}
          hebrew='true'
          required
        />
      </div>
      <SelectInput
        name='active'
        label='פעיל'
        value={active}
        handleChange={handleChange}
        required
      />
    </>
  );
};

export default CourseInfoForm;
