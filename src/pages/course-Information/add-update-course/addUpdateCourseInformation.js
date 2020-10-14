import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import MyButton from '../../../component/my-button/button';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import './addUpdateCourseInfo.style.scss';
import CourseInfoForm from './forms/courseInfoForm';
import { UpdatePageContainer } from '../../../component/global-style/settingsSection';

const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateCourseInfo = ({ history }) => {
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    email: '',
    subject: '',
    active: true,
    marktingText: '',
  });

  const handleEditorChange = (content) => {
    setCourseDetails({ ...courseDetails, marktingText: content });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };
  const { marktingText } = courseDetails;

  return (
    <UpdatePageContainer>
      <form onSubmit={handleSubmit}>
        <CourseInfoForm
          handleChange={handleChange}
          courseDetails={courseDetails}
        />
        <div className='editor'>
          <label>פלאח שיווקי</label>
          <Editor
            apiKey='mwj83bdxn8dsq4sd6vz3oqclxlahbuzdhctyaoq2wfwmff1g'
            initialValue={marktingText}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount directionality',
              ],
              toolbar:
                'rtl |undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent ',
            }}
            onEditorChange={handleEditorChange}
          />
        </div>
        <div className='buttons'>
          <MyButton>{element}</MyButton>
          <MyButton
            onClick={() => history.push('/settings/Course-information')}
            type='button'
            forgot
          >
            חזרה
          </MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateCourseInfo);
