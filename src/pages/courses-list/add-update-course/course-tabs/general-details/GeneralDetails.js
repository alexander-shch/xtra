import React from 'react';
import InputField from '../../../../../components/inputs/input-field/InputField';
import SelectInput from '../../../../../components/inputs/select-input/SelectInput';
import SelectInputProps from '../../../../../components/inputs/selectProps/SelectInputProps';
import TextArea from '../../../../../components/inputs/text-area/TextArea';
import MyButton from '../../../../../components/My-button/MyButton';
import './generalDetails.style.scss';

const GeneralDetails = ({ categories }) => {
  return (
    <form>
      <div className='general-first-row'>
        <InputField
          name='minStudent'
          type='number'
          label='מספר תלמידים מינמלי '
          hebrew='true'
          required
        />
        <InputField
          name='maxStudent'
          type='number'
          label='מספר תלמידים מקסימלי '
          hebrew='true'
          required
        />
        <SelectInputProps
          props={categories}
          name='categories'
          selectTitle='בחר תחום'
          keyToValue='_id'
          keyToDisplay='title'
          label='תחום'
          // handdleChange={handdleChange}
        />
      </div>
      <SelectInput
        name='active'
        label='מוצג באתר'
        // handleChange={handdleChange}
        required
      />
      <TextArea
        name='notes'
        type='text'
        label='הערות לשיבוץ כיתה'
        hebrew='true'
      />
      <InputField
        name='classNotes'
        type='number'
        label='הערות לקביעת מועדי מפגשים'
        hebrew='true'
      />
      <div className='buttons'>
        <MyButton>שמור</MyButton>
        <MyButton type='button' forgot>
          חזרה
        </MyButton>
      </div>
    </form>
  );
};

export default GeneralDetails;
