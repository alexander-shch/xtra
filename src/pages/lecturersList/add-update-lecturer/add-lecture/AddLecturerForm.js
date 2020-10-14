import React from 'react';
import InputField from '../../../../component/inputs/input-field/InputField';
import TextArea from '../../../../component/inputs/text-area/TextArea';
import './addLectureForm.style.scss';
import { Editor } from '@tinymce/tinymce-react';
import MyButton from '../../../../component/my-button/MyButton';
import SelectInput from '../../../../component/inputs/select-input/SelectInput';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../../componnent/spinner/Spinner';
const AddLecturerForm = ({
  history,
  handleChange,
  vatList,
  lectureDeteils,
  handleSubmit,
  handleEditorChange,
  inProcess,
  lectureID,
  clearSingle,
  innerSinglePageLoading,
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
        <div className='selectContianer'>
          <select
            required
            name='duplicator'
<<<<<<< HEAD:src/pages/LecturersList/Add-update-Lecturer/add-lecture/AddLecturerForm.js
            className='selectbuildingInput'
            value={duplicator ? duplicator : '1'}
            onChange={handdleChange}
=======
            className='.selectbuildingInput'
            defaultValue={duplicator !== '' ? duplicator : '1'}
            onChange={handleChange}
>>>>>>> master:src/pages/lecturersList/add-update-lecturer/add-lecture/AddLecturerForm.js
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
          <label className='selectInputLabael'> מכפיל שכר</label>
        </div>
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
          name='internalNotes'
          type='text'
          label='הערות'
          handleChange={handleChange}
          hebrew='true'
        />
      </div>
      <div className='buttons'>
        <MyButton save loading={inProcess}>
          שמור
        </MyButton>
        <MyButton
          type='button'
          onClick={() => {
            history.push('/lecturers');
            if (lectureID) {
              clearSingle();
            }
          }}
          forgot
        >
          ביטול
        </MyButton>
      </div>
    </form>
  );
};

export default withRouter(AddLecturerForm);
