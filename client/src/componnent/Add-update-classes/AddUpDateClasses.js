import React, { useState } from 'react';
import './addUpdateClasses.style.scss';
import Calendar from '../Calendar/Calendar';
import FirstForm from './first-form/FirstForm';
import SecondForm from '../Add-update-classes/second-form/SecondForm';
import { withRouter } from 'react-router-dom';
import { addNewClass } from '../../Redux/classes/class.action';
import { connect } from 'react-redux';

const AddUpDateClasses = ({
  buildings,
  match,
  location,
  addNewClass,
  history,
}) => {
  const url = match.params.ClassesID;
  const defaultName = url === 'updateClasses' ? location.state.name : '';
  const defaultBuilding =
    url === 'updateClasses' ? location.state.building._id : null;
  const defaultMinNum =
    url === 'updateClasses' ? location.state.minStudents : '';
  const defaultMaxNum =
    url === 'updateClasses' ? location.state.maxStudents : '';
  const title = url === 'updateClasses' ? 'עדכון כיתה' : 'הוספת כיתה';

  const [classDetails, setClassDetails] = useState({
    name: defaultName,
    minStudents: defaultMinNum,
    maxStudents: defaultMaxNum,
    building: defaultBuilding,
  });

  const [dateFormView, setDateFormView] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(classDetails);
    if (url === 'addClass') {
      try {
        await addNewClass(classDetails, history);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handdleChange = (e) => {
    const { name, value } = e.target;
    setClassDetails({ ...classDetails, [name]: value });
  };

  return (
    <div className='addClassContainer'>
      <div className='classForm'>
        <h3>{title}</h3>
        <FirstForm
          buildings={buildings}
          handleSubmit={handleSubmit}
          handdleChange={handdleChange}
          classDetails={classDetails}
        />
        <h4>זמינות</h4>
        {url === 'updateClasses' ? <SecondForm /> : null}
        <Calendar />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewClass: (classDetails, history) =>
    dispatch(addNewClass(classDetails, history)),
});

export default connect(null, mapDispatchToProps)(withRouter(AddUpDateClasses));
