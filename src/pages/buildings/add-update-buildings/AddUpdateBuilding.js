import React, { useEffect, useState } from 'react';
import InputField from '../../../components/inputs/input-field/InputField';
import SelectInput from '../../../components/inputs/select-input/SelectInput';
import { UpdatePageContainer } from '../../../components/global-style/SettingSection';
import MyButton from '../../../components/My-button/MyButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Spinner from '../../../components/spinner/Spinner';

const element = <FontAwesomeIcon icon={faSave} />;

const AddUpdateBuilding = ({
  history,
  addNewBuilding,
  updateBuilding,
  match,
  getSingleBuilding,
  ...otherProps
}) => {
  const { clearSingle, error, innerSinglePageLoading, singleBuilding, } = otherProps

  const buildingID = match.params.BuildingId;
  const [buildingDetails, setBuildingDetail] = useState({
    name: '',
    active: true,
  });

  useEffect(() => {
    if (buildingID) {
      getSingleBuilding(buildingID);
      return () => {
        clearSingle()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (singleBuilding) {
      const { name, active } = singleBuilding;
      setBuildingDetail({ name, active });
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
    innerSinglePageLoading ? <Spinner /> :
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
            <MyButton >
              {element}
            </MyButton>
            <MyButton type='button' onClick={() => cancel()} forgot>
              חזרה
          </MyButton>
          </div>
        </form>
      </UpdatePageContainer>
  )
};

export default withRouter(AddUpdateBuilding);
