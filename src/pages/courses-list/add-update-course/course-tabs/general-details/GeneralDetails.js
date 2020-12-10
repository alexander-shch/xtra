import React from 'react';
import InputField from '../../../../../components/inputs/input-field/InputField';
import SelectInput from '../../../../../components/inputs/select-input/SelectInput';
import SelectInputProps from '../../../../../components/inputs/selectProps/SelectInputProps';
import TextArea from '../../../../../components/inputs/text-area/TextArea';

import './generalDetails.style.scss';

const GeneralDetails = ({
  categories,
  courseData,
  handleChange,
  couponsList,
}) => {
  const {
    title,
    minStudents,
    maxStudents,
    assignToClassComments,
    schedulingComments,
    active,
    category,
    coupon,
  } = courseData;
  return (
    <>
      <InputField
        name='title'
        value={title}
        type='text'
        label='שם הקורס'
        handleChange={handleChange}
        hebrew='true'
      />

      <div className='general-first-row'>
        <SelectInputProps
          props={categories}
          name='category'
          selectTitle='בחר תחום'
          keyToValue='_id'
          keyToDisplay='title'
          label='תחום'
          value={category}
          handleChange={handleChange}
        />
        <InputField
          name='minStudents'
          type='number'
          label='מספר תלמידים מינמלי '
          hebrew='true'
          value={minStudents}
          handleChange={handleChange}
          required
        />
        <InputField
          name='maxStudents'
          type='number'
          label='מספר תלמידים מקסימלי '
          hebrew='true'
          value={maxStudents}
          handleChange={handleChange}
          required
        />
      </div>
      <SelectInput
        name='active'
        label='מוצג באתר'
        value={active}
        handleChange={handleChange}
        required
      />
      <TextArea
        name='assignToClassComments'
        type='text'
        label='הערות לשיבוץ כיתה'
        value={assignToClassComments}
        handleChange={handleChange}
        hebrew='true'
      />
      <InputField
        name='schedulingComments'
        type='text'
        value={schedulingComments}
        label='הערות לקביעת מועדי מפגשים'
        handleChange={handleChange}
        hebrew='true'
      />
      <SelectInputProps
        props={couponsList}
        name='coupon'
        value={coupon}
        selectTitle='בחר קופון'
        keyToValue='_id'
        keyToDisplay='title'
        label='קופון משויך'
        canBeEmpty={true}
        handleChange={handleChange}
      />
    </>
  );
};

export default GeneralDetails;
