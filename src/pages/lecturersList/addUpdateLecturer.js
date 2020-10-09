import React, { useState, useEffect } from 'react';
import AddLecturerForm from './add-update-lecturer/add-lecture/AddLecturerForm';
import UpdateLectureForm from './add-update-lecturer/update-lecture/updateLectureForm';
import { UpdatePageContainer } from '../../component/global-style/SettingSection';
import { withRouter } from 'react-router-dom';
import MyAlert from '../../component/my-Alert/MyAlert';

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
  const isUrlValid = () => {
    return lectures.some((lecture) => lecture._id === lectureID);
  };

  const singleLecture =
    lectureID && lectures.length !== 0 && isUrlValid()
      ? lectures.filter((item) => item._id === lectureID)
      : null;

  const [lectureDeteils, setLectureDetails] = useState({
    name: '',
    idNumber: '',
    email: '',
    phone: '',
    address: { address: '' },
    hourlyRate: '',
    duplicator: '',
    active: true,
    details: '',
    description: '',
    experience: '',
    teaching: '',
  });

  useEffect(() => {
    if (lectureID && lectures.length !== 0 && !isUrlValid()) {
      history.push('/lecturers');
    }
    if (singleLecture && isUrlValid()) {
      const name = singleLecture[0].name;
      const idNumber = singleLecture[0].idNumber;
      const phone = singleLecture[0].phone;
      const email = singleLecture[0].email;
      const address = singleLecture[0].address.address;
      const hourlyRate = singleLecture[0].hourlyRate;
      const duplicator = singleLecture[0].duplicator;
      const details = singleLecture[0].details;
      const description = singleLecture[0].description;
      const experience = singleLecture[0].experience;
      const teaching = singleLecture[0].teaching;
      const active = singleLecture[0].active;
      setLectureDetails({
        name,
        idNumber,
        phone,
        email,
        address: { address: address },
        hourlyRate,
        duplicator,
        details,
        description,
        experience,
        teaching,
        active,
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        />
        {singleLecture ? <UpdateLectureForm id={lectureID} /> : null}
      </UpdatePageContainer>
    </>
  );
};

export default withRouter(AddUpdateLecturer);
