import React, { useState } from 'react';
import InputField from '../input-field/InputField';
import SelectInput from '../select-input/SelectInput';
import './AddUpdateBuilding.style.scss';
import MyButton from '../My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import {
  addNewBuilding,
  updateBuilding,
} from '../../Redux/buildings/buildings.actions';
const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateBuilding = ({
  location,
  history,
  addNewBuilding,
  updateBuilding,
  match,
}) => {
  const url = match.params.BuildingsId;
  const defultName = url === 'updateBuilding' ? location.state.name : '';

  const [buildingDetails, setBuildingDetail] = useState({
    name: defultName,
    active: true,
  });
  let { name, active } = buildingDetails;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (url === 'updateBuilding') {
      let itemid = location.state._id;
      try {
        await updateBuilding(itemid, name, active);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await addNewBuilding(name, active);
      } catch (err) {
        console.log(err);
      }
    }
    history.push('/settings/buildings/');
  };
  const handdleChange = (e) => {
    const { name, value } = e.target;
    setBuildingDetail({ ...buildingDetails, [name]: value });
  };
  const cancel = () => {
    history.push('/settings/buildings/');
  };

  return (
    <div className='addBuildingContainer'>
      <div className='formContainer'>
        <h3>{url === 'addBuilding' ? 'הוספה' : 'עריכה'}</h3>
        <form onSubmit={handleSubmit}>
          <InputField
            name='name'
            type='text'
            label='שם המקום'
            value={name}
            handleChange={handdleChange}
            hebrew='true'
            required
          />
          <SelectInput
            name='active'
            label='פעיל'
            value={active}
            handleChange={handdleChange}
            required
          />

          <MyButton>{element}</MyButton>
          <MyButton type='button' onClick={() => cancel()} forgot>
            ביטול
          </MyButton>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addNewBuilding: (name, active) => dispatch(addNewBuilding(name, active)),
  updateBuilding: (itemid, name, active) =>
    dispatch(updateBuilding(itemid, name, active)),
});

export default connect(null, mapDispatchToProps)(AddUpdateBuilding);
