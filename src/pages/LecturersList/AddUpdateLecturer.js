import React, { useState } from 'react';
import AddLecturerForm from '../../componnent/Add-update-Lecturer/add-lecture/AddLecturerForm';
import UpdateLectureForm from '../../componnent/Add-update-Lecturer/update-lecture/UpdateLectureForm';
import { UpdatePageContainer } from '../../componnent/global-style/SettingSection';
import { withRouter } from 'react-router-dom';

const AddUpdateLecturer = ({
  vatList,
  match,
  location,
  history,
  addNewLecture,
  updateLecture,
  setAvatarImg,
}) => {
  const url = match.params.LecturerID;
  const defaultName = url === 'updateLecture' ? location.state.name : '';
  const defaultIdNumber =
    url === 'updateLecture' ? location.state.idNumber : '';
  const defaultPhone = url === 'updateLecture' ? location.state.phone : '';
  const defaultEmail = url === 'updateLecture' ? location.state.email : '';
  const defaultAdress =
    url === 'updateLecture' ? location.state.address.address : '';
  const defaultHourlyRate =
    url === 'updateLecture' ? location.state.hourlyRate : '';
  const defaultDuplicator =
    url === 'updateLecture' ? location.state.duplicator : '';
  const defaultDetails = url === 'updateLecture' ? location.state.details : '';
  const defaultDescription =
    url === 'updateLecture' ? location.state.description : '';
  const defaultExperience =
    url === 'updateLecture' ? location.state.experience : '';
  const defaultTeaching =
    url === 'updateLecture' ? location.state.teaching : '';

  const defaultActive = url === 'updateLecture' ? location.state.active : true;
  const test = url === 'updateLecture' ? location.state._id : null;

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

  const [imgFile, setImgFile] = useState({ file: null });
  const { file } = imgFile;

  const handdleSubmit = async (e) => {
    e.preventDefault();
    let { active } = lectureDeteils;
    active = JSON.parse(active);
    if (url === 'addLecturer') {
      try {
        await addNewLecture(lectureDeteils, history);
      } catch (err) {
        console.log(err);
      }
    }
    if (url === 'updateLecture') {
      const id = location.state._id;
      try {
        await updateLecture(id, lectureDeteils);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handdleChange = (e) => {
    const { name, value } = e.target;
    name === 'address'
      ? setLectureDetails({ ...lectureDeteils, address: { address: value } })
      : setLectureDetails({ ...lectureDeteils, [name]: value });
  };
  const handdleImgChange = (e) => {
    const { files } = e.target;
    setImgFile({ file: files });
  };

  const fileSubmit = async (e) => {
    const id = location.state._id;
    let fromData = new FormData();

    fromData.append('file', file[0]);
    console.log(fromData, file[0]);

    try {
      await setAvatarImg(id, fromData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <UpdatePageContainer>
      <AddLecturerForm
        handdleChange={handdleChange}
        handdleSubmit={handdleSubmit}
        vatList={vatList}
        lectureDeteils={lectureDeteils}
      />
      {url === 'updateLecture' ? (
        <UpdateLectureForm
          handdleImgChange={handdleImgChange}
          fileSubmit={fileSubmit}
          id={test}
        />
      ) : null}
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateLecturer);
