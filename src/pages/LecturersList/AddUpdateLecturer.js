import React, { useState, useEffect } from 'react';
import AddLecturerForm from './Add-Update-Lecturer/Add-Lecturer/AddLecturerForm';
import UpdateLectureForm from './Add-Update-Lecturer/Update-Lecturer/UpdateLectureForm';
import { UpdatePageContainer } from '../../components/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import MyAlert from '../../components/My-Alert/MyAlert';
import Spinner from '../../components/spinner/Spinner';


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
        clearSingle()
      }
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
        notes
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
        notes
      });
    }
    if (error) {
      history.push('/lecturers');
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleLecture, error]);

  const handdleSubmit = async (e) => {
    const { duplicator } = lectureDeteils
    e.preventDefault();
    if (!singleLecture) {
      try {
        if (!duplicator) {
          setAlert('יש לבחור מכפיל', 'error')
          return
        } else {
          await addNewLecture(lectureDeteils, history)
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

  const handdleChange = (e) => {
    const { name, value } = e.target;
    name === 'address'
      ? setLectureDetails({ ...lectureDeteils, address: { address: value } })
      : setLectureDetails({ ...lectureDeteils, [name]: value });
  };

  return (
    <>
      <MyAlert />
      {innerSinglePageLoading ? <Spinner /> :
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

            inProcess={inProcess}
          />
          {singleLecture ? <UpdateLectureForm id={lectureID} /> : null}
        </UpdatePageContainer>}
    </>
  );
};

export default withRouter(AddUpdateLecturer);
