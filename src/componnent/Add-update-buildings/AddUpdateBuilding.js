import React, { useState } from 'react';
import InputField from '../inputes/input-field/InputField';
import SelectInput from '../inputes/select-input/SelectInput';
import { UpdatePageContainer } from '../global-style/SettingSection';
import MyButton from '../My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateBuilding = ({
  history,
  addNewBuilding,
  updateBuilding,
  buildings,
  match,
}) => {
  const buildingID = match.params.BuildingId;

  let building = buildingID
    ? buildings.filter((item) => item._id === buildingID)
    : null;

  const defultName = buildingID ? building[0].name : '';

  const [buildingDetails, setBuildingDetail] = useState({
    name: defultName,
    active: true,
  });
  let { name, active } = buildingDetails;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (buildingID) {
      try {
        await updateBuilding(buildingID, name, active);
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
    <UpdatePageContainer>
      <h3>{buildingID ? 'הוספה' : 'עריכה'}</h3>
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
        <div className='buttons'>
          <MyButton>{element}</MyButton>
          <MyButton type='button' onClick={() => cancel()} forgot>
            ביטול
          </MyButton>
        </div>
      </form>
    </UpdatePageContainer>
  );
};

export default withRouter(AddUpdateBuilding);
