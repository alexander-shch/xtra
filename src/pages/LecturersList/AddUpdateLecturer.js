import React, { useState, useEffect } from 'react';
import AddLecturerForm from './Add-update-Lecturer/add-lecture/AddLecturerForm';
import UpdateLectureForm from './Add-update-Lecturer/update-lecture/UpdateLectureForm';
import { UpdatePageContainer } from '../../componnent/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import MyAlert from '../../componnent/my-Alert/MyAlert';

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
}) => {
  const lectureID = match.params.LecturerID;
  useEffect(() => {
    if (lectureID) {
      getSingleLecture(lectureID);
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
      });
    }
    if (error) {
      history.push('/lecturers');
      clearSingle();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLecture, error]);

  const handdleSubmit = async (e) => {
    e.preventDefault();
    if (!singleLecture) {
      try {
        await addNewLecture(lectureDeteils, history);
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

  const handdleChange = (e) => {
    const { name, value } = e.target;
    name === 'address'
      ? setLectureDetails({ ...lectureDeteils, address: { address: value } })
      : setLectureDetails({ ...lectureDeteils, [name]: value });
  };

  return (
    <>
      <MyAlert />
      <UpdatePageContainer>
        <AddLecturerForm
          handdleChange={handdleChange}
          handleEditorChange={handleEditorChange}
          handdleSubmit={handdleSubmit}
          vatList={vatList}
          lectureDeteils={lectureDeteils}
          lecturesLoading={lecturesLoading}
          lectureID={lectureID}
          clearSingle={clearSingle}
          innerSinglePageLoading={innerSinglePageLoading}
          inProcess={inProcess}
        />
        {singleLecture ? <UpdateLectureForm id={lectureID} /> : null}
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateLecturer);
