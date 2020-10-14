import React, { useState, useEffect } from 'react';
import AddLecturerForm from './add-update-lecturer/add-lecture/addLectureForm';
import UpdateLectureForm from './add-update-lecturer/update-lecture/updateLectureForm';
import { UpdatePageContainer } from '../../component/global-style/settingSection';
import { withRouter } from 'react-router-dom';
import MyAlert from '../../component/my-alert/MyAlert';

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

  const handleSubmit = async (e) => {
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

  const handleChange = (e) => {
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
          handleChange={handleChange}
          handleEditorChange={handleEditorChange}
          handleSubmit={handleSubmit}
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
