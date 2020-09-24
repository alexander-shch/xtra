import React, { useState } from 'react';
import AddLecturerForm from '../../componnent/Add-update-Lecturer/add-lecture/AddLecturerForm';
import UpdateLectureForm from '../../componnent/Add-update-Lecturer/update-lecture/UpdateLectureForm';
import { UpdatePageContainer } from '../../componnent/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import MyAlert from '../../componnent/My-Alert/MyAlert';

const AddUpdateLecturer = ({
  vatList,
  match,
  history,
  addNewLecture,
  updateLecture,
  lectures,
  lecturesLoading,
}) => {
  const lectureID = match.params.LecturerID;
  const singleLecture =
    lectureID && lectures.length !== 0
      ? lectures.filter((item) => item._id === lectureID)
      : null;

  const defaultName = singleLecture ? singleLecture[0].name : '';
  const defaultIdNumber = singleLecture ? singleLecture[0].idNumber : '';
  const defaultPhone = singleLecture ? singleLecture[0].phone : '';
  const defaultEmail = singleLecture ? singleLecture[0].email : '';
  const defaultAdress = singleLecture ? singleLecture[0].address.address : '';
  const defaultHourlyRate = singleLecture ? singleLecture[0].hourlyRate : '';
  const defaultDuplicator = singleLecture ? singleLecture[0].duplicator : '';
  const defaultDetails = singleLecture ? singleLecture[0].details : '';
  const defaultDescription = singleLecture ? singleLecture[0].description : '';
  const defaultExperience = singleLecture ? singleLecture[0].experience : '';
  const defaultTeaching = singleLecture ? singleLecture[0].teaching : '';

  const defaultActive = singleLecture ? singleLecture[0].active : true;

  const [lectureDeteils, setLectureDetails] = useState({
    name: defaultName,
    idNumber: defaultIdNumber,
    email: defaultEmail,
    phone: defaultPhone,
    address: { address: defaultAdress },
    hourlyRate: defaultHourlyRate,
    duplicator: defaultDuplicator,
    active: defaultActive,
    details: defaultDetails,
    description: defaultDescription,
    experience: defaultExperience,
    teaching: defaultTeaching,
  });

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
        />
        {singleLecture ? <UpdateLectureForm id={lectureID} /> : null}
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateLecturer);
