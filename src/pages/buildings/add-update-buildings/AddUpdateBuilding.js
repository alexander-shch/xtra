import React, { useEffect, useState } from 'react';
import InputField from '../../../componnent/inputes/input-field/InputField';
import SelectInput from '../../../componnent/inputes/select-input/SelectInput';
import { UpdatePageContainer } from '../../../componnent/global-style/SettingSection';
import MyButton from '../../../componnent/My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateBuilding = ({
  history,
  addNewBuilding,
  updateBuilding,
  match,
  getSingleBuilding,
  singleBuilding,
  clearSingle,
  error,
}) => {
  const buildingID = match.params.BuildingId;
  const [buildingDetails, setBuildingDetail] = useState({
    name: '',
    active: true,
  });

  useEffect(() => {
    if (buildingID) {
      getSingleBuilding(buildingID);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (singleBuilding) {
      const { name, active } = singleBuilding;
      setBuildingDetail({ name, active });
      return () => {
        clearSingle();
      };
    }
    if (error) {
      history.push('/settings/buildings/');
      clearSingle();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [singleBuilding, error]);

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
      <h3>{buildingID ? 'עריכה' : 'הוספה'}</h3>
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
