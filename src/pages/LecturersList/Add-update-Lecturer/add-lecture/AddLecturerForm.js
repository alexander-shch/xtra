import React from 'react';
import InputField from '../../../../component/inputs/input-field/InputField';
import TextArea from '../../../../component/inputs/text-area/TextArea';
import './addLectureForm.style.scss';
import { Editor } from '@tinymce/tinymce-react';
import MyButton from '../../../../component/my-button/MyButton';
import SelectInput from '../../../../component/inputs/select-input/SelectInput';
import { withRouter } from 'react-router-dom';
const AddLecturerForm = ({
  history,
  handdleChange,
  vatList,
  lectureDeteils,
  handdleSubmit,
  handleEditorChange,
  lecturesLoading,
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
  } = lectureDeteils;
  return (
    <form onSubmit={handdleSubmit}>
      <div className='add-lecture-form'>
        <InputField
          name='name'
          type='text'
          label='שם המרצה'
          value={name}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='idNumber'
          type='number'
          label='תז'
          value={idNumber}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='phone'
          type='text'
          value={phone}
          label='טלפון'
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='email'
          type='email'
          label='דוא"ל'
          value={email}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='address'
          type='text'
          label='כתובת'
          value={address.address}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <InputField
          name='hourlyRate'
          type='number'
          label='שכר לשעה'
          value={hourlyRate}
          handleChange={handdleChange}
          hebrew='true'
          required
        />
        <div className='selectContianer'>
          <select
            required
            name='duplicator'
            className='.selectbuildingInput'
            defaultValue={duplicator !== '' ? duplicator : '1'}
            onChange={handdleChange}
          >
            <option value='1' disabled hidden>
              בחר מכפיל
            </option>
            {vatList.map((item) => (
              <option key={item._id} value={item._id}>
                {item.title}
              </option>
            ))}
          </select>
          <label className='selectInputLabael'>בחר מכפיל שכר</label>
        </div>
        <SelectInput
          name='active'
          label='פעיל'
          value={active}
          handleChange={handdleChange}
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
          handleChange={handdleChange}
          hebrew='true'
        />
        <TextArea
          name='experience'
          type='text'
          label='נסיון קודם'
          value={experience}
          handleChange={handdleChange}
          hebrew='true'
        />
        <TextArea
          name='teaching'
          type='text'
          label='מקצועות לימוד'
          value={teaching}
          handleChange={handdleChange}
          hebrew='true'
        />
        <TextArea
          name='internalNotes'
          type='text'
          label='הערות'
          handleChange={handdleChange}
          hebrew='true'
        />
      </div>
      <div className='buttons'>
        <MyButton save loading={lecturesLoading}>
          שמור
        </MyButton>
        <MyButton
          type='button'
          onClick={() => history.push('/lecturers')}
          forgot
        >
          ביטול
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(AddLecturerForm);
