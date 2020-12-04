import React from 'react';
import InputField from '../../../../components/inputs/input-field/InputField';
import TextArea from '../../../../components/inputs/text-area/TextArea';
import './addLectureForm.style.scss';
import { Editor } from '@tinymce/tinymce-react';
import MyButton from '../../../../components/My-button/MyButton';
import SelectInput from '../../../../components/inputs/select-input/SelectInput';
import { withRouter } from 'react-router-dom';
import SelectInputProps from '../../../../components/inputs/selectProps/SelectInputProps';
const AddLecturerForm = ({
  history,
  handleChange,
  vatList,
  lectureDeteils,
  handleSubmit,
  handleEditorChange,
  inProcess,
  lectureID,
}) => {
  const {
    name,
    idNumber,
    phone,
    address,
    email,
    hourlyRate,
    duplicator,
    active,
    details,
    description,
    experience,
    teaching,
    notes,
  } = lectureDeteils;
  return (
    <form onSubmit={handleSubmit}>
      <div className='add-lecture-form'>
        <InputField
          name='name'
          type='text'
          label='שם המרצה'
          value={name}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='idNumber'
          type='number'
          label='תז'
          value={idNumber}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='phone'
          type='text'
          value={phone}
          label='טלפון'
          handleChange={handleChange}
          hebrew='true'
          required
        />
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
          name='address'
          type='text'
          label='כתובת'
          value={address.address}
          handleChange={handleChange}
          hebrew='true'
          required
        />
        <InputField
          name='hourlyRate'
          type='number'
          label='שכר לשעה'
          value={hourlyRate}
          handleChange={handleChange}
          hebrew='true'
          required
        />

        <SelectInputProps
          props={vatList}
          name='duplicator'
          value={duplicator}
          selectTitle='בחר מכפיל'
          keyToValue='_id'
          keyToDisplay='title'
          label='מכפילי שכר'
          handleChange={handleChange}
        />
        <SelectInput
          name='active'
          label='פעיל'
          value={active}
          handleChange={handleChange}
          required
        />
        <div className='editor'>
          <label>פרטים על המרצה</label>

          <Editor
            apiKey='mwj83bdxn8dsq4sd6vz3oqclxlahbuzdhctyaoq2wfwmff1g'
            initialValue={details}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount directionality',
              ],
              directionality: 'rtl',
              toolbar:
                'rtl |undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <TextArea
          name='description'
          type='text'
          label='תיאור'
          value={description}
          handleChange={handleChange}
          hebrew='true'
        />
        <TextArea
          name='experience'
          type='text'
          label='נסיון קודם'
          value={experience}
          handleChange={handleChange}
          hebrew='true'
        />
        <TextArea
          name='teaching'
          type='text'
          label='מקצועות לימוד'
          value={teaching}
          handleChange={handleChange}
          hebrew='true'
        />
        <TextArea
          name='notes'
          type='text'
          label='הערות'
          value={notes}
          handleChange={handleChange}
          hebrew='true'
        />
      </div>
      <div className='buttons'>
        <MyButton
          type='button'
          onClick={() => {
            history.push('/lecturers');
            if (lectureID) {
            }
          }}
          forgot
        >
          חזרה
        </MyButton>
        <MyButton save loading={inProcess}>
          שמור
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(AddLecturerForm);
