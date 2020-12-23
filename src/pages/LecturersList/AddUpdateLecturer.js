import React, { useState, useEffect } from 'react';
import AddLecturerForm from './Add-Update-Lecturer/Add-Lecturer/AddLecturerForm';
import UpdateLectureForm from './Add-Update-Lecturer/Update-Lecturer/UpdateLectureForm';
import { UpdatePageContainer } from '../../components/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import PageSpinner from '../../components/spinner/page-spinner/PageSpinner';

const AddUpdateLecturer = ({
  vatList,
  match,
  history,
  addNewLecture,
  updateLecture,
  lecturesLoading,
  getSingleLecture,
  singleLecture,
  error,
  clearSingle,
  innerSinglePageLoading,
  inProcess,
  setAlert,
}) => {
  const lectureID = match.params.LecturerID;
  useEffect(() => {
    if (lectureID) {
      getSingleLecture(lectureID);
      return () => {
        clearSingle();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [lectureDeteils, setLectureDetails] = useState({
    name: '',
    idNumber: '',
    email: '',
    phone: '',
    address: { address: '' },
    hourlyRate: '',
    duplicator: null,
    active: true,
    details: '',
    description: '',
    experience: '',
    teaching: '',
    notes: '',
  });

  useEffect(() => {
    if (singleLecture) {
      const {
        name,
        idNumber,
        email,
        phone,
        address: { address },
        hourlyRate,
        duplicator: { _id },
        active,
        details,
        description,
        experience,
        teaching,
        notes,
      } = singleLecture;
      setLectureDetails({
        name,
        idNumber,
        email,
        phone,
        address: { address },
        hourlyRate,
        duplicator: _id,
        active,
        details,
        description,
        experience,
        teaching,
        notes,
      });
    }
    if (error) {
      history.push('/lecturers');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLecture, error]);

  const handleSubmit = async (e) => {
    const { duplicator } = lectureDeteils;
    e.preventDefault();

    if (!singleLecture) {
      try {
        if (!duplicator) {
          setAlert('יש לבחור מכפיל', 'error');
          return;
        } else {
          await addNewLecture(lectureDeteils, history);
        }
      } catch (err) {
        console.log(err);
      }
    }
    if (singleLecture) {
      try {
        await updateLecture(lectureID, lectureDeteils);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleEditorChange = (content) => {
    setLectureDetails({ ...lectureDeteils, details: content });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === 'address'
      ? setLectureDetails({ ...lectureDeteils, address: { address: value } })
      : setLectureDetails({ ...lectureDeteils, [name]: value });
  };

  return (
    <PageSpinner active={innerSinglePageLoading}>
      <UpdatePageContainer>
        <AddLecturerForm
          handleChange={handleChange}
          handleEditorChange={handleEditorChange}
          handleSubmit={handleSubmit}
          vatList={vatList}
          lectureDeteils={lectureDeteils}
          lecturesLoading={lecturesLoading}
          lectureID={lectureID}
          clearSingle={clearSingle}
          inProcess={inProcess}
        />
        {singleLecture ? <UpdateLectureForm id={lectureID} /> : null}
      </UpdatePageContainer>
    </PageSpinner>
  );
};

export default withRouter(AddUpdateLecturer);
